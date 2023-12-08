import { Row, Form } from 'antd';
import * as S from './style'
import { useDebt } from '../../context/DebtContext';
import DebtRow from './DebtRow';
import { Debt } from '../../models/debt';


interface CurrentProps {
  setReady: (ready: boolean) => void;
}

function DebtTable({ setReady }: CurrentProps) {
  const { debtList, addToList, removeFromList, updateFromList } = useDebt()
  const [form] = Form.useForm();

  const handleAddDebt = (values: any) => {
    if(!values.debts) return null

    values.debts.forEach((debt: any) => {
      const { id, debtName, apr, month, amount } = debt
      
      // Any pre-existing data from context and will get updated
      if (id) {
        updateFromList(id, debt)
      }
      // If all fields are not completed (no ID from Context and No Fields completed)
      else if (!id && debtName === '' && apr === '' && month === '' && amount === '') {
        return null
      }
      // If new data (it has all fields in form and no records in Context)
      else if (!id) {
        const newDebt: Debt = new Debt(debtName, amount, apr, month)
        addToList(newDebt)
      }

    })
    setReady(true)
  }
  
  const handleRemove = (value, cleanForm) => {
    const id = form.getFieldValue(['debts', ...value])
    cleanForm(value)
    removeFromList(id)
  }

  return (
    <>
      <Form onFinish={handleAddDebt} name="all" initialValues={{ debts: debtList }} form={form}>

        <Row gutter={16}>
          <S.ColTitle span={6}>DEBT NAME</S.ColTitle>
          <S.ColTitle span={6}>REMAINING DEBT AMOUNT</S.ColTitle>
          <S.ColTitle span={6}>CURRENT APR</S.ColTitle>
          <S.ColTitle span={6}>CURRENT MONTHLY PAYMENT</S.ColTitle>
        </Row>

        <Form.List name="debts">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <DebtRow
                  key={key} cleanRow={(e) => handleRemove(e, remove)}
                  field={restField} name={name} />
              ))}
              <S.AddingMoreDebt onClick={() => add('', 0)}>+ Add another Debt</S.AddingMoreDebt>
            </>
          )}
        </Form.List>
        <Row>
          <S.ButtonSubmit type="primary" htmlType="submit" block>Calculate Savings</S.ButtonSubmit>
        </Row>

      </Form >
    </>
  )
}

export default DebtTable