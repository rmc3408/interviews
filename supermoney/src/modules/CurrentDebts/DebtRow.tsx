import { memo } from 'react';
import { Row, Col, Form } from 'antd';
import * as S from './style'
import Input from '../../components/Input'

interface RowProps {
  name: number
  cleanRow: (fieldCode: [number, string]) => void
  field: any
}

function DebtRow({ cleanRow, field, name }: RowProps) {

  return (
    <Row gutter={16}>
      <Col span={6}><Form.Item {...field} name={[name, 'debtName']} required>
        <Input />
      </Form.Item></Col>
      <Col span={6}><Form.Item {...field} name={[name, 'amount']} required>
        <Input addonBefore="$" />
      </Form.Item></Col>
      <Col span={6}><Form.Item {...field} name={[name, 'apr']} required>
        <Input addonAfter="%" />
      </Form.Item></Col>
      <Col span={6}>
        <S.DeleteContainer>
          <Form.Item {...field} name={[name, 'month']} required>
            <Input addonBefore="$" />
          </Form.Item>
          {name > 0 ? <S.DeleteBox onClick={() => cleanRow([name, 'id'])}>X</S.DeleteBox> : <span></span>}
        </S.DeleteContainer>
      </Col>
      <Form.Item {...field} name={[name, 'id']} hidden={true}>
        <Input />
      </Form.Item>
    </Row >
  )
}

export default memo(DebtRow)