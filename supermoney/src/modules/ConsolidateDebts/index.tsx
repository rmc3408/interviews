import { useCallback, useEffect, useMemo, useState } from 'react';
import Title from './Title';
import * as S from './style';
import { useDebt } from '../../context/DebtContext';
import InputAPR from '../../components/DesiredSlider/InputAPR';
import InputLoanTerm from '../../components/DesiredSlider/InputLoanTerm';
import Loan from '../../models/Loan';


interface ConsolidatedProps {
  setReady: (ready: boolean) => void;
}

function ConsolidatedDebts({ setReady }: ConsolidatedProps) {
  const { debtList } = useDebt();
  const [ loan, setLoan] = useState({ selectAPR: 8, selectMonth: 24 })
  const [ oldDebt, setOldDebt ] = useState({ oldAmount: 0, oltMonth: 0 })
  const { selectAPR, selectMonth } = loan

  const handleApr = useCallback((value: number) => setLoan(st => ({ ...st, selectAPR: value })), [selectAPR])
  const handleMonth = useCallback((value: number) => setLoan(st => ({ ...st, selectMonth: value })), [selectMonth])

  useEffect(() => {
    function calculateOldLoan() {
      const { oldAmount, oltMonth } = Loan.getOldLoan(debtList)
      setOldDebt({ oldAmount, oltMonth })
    }
    calculateOldLoan()
  }, [debtList])

  const newDebt = useMemo(() => Loan.getNewLoan(debtList, selectAPR, selectMonth), [selectAPR, selectMonth])

  return (
    <>
      <S.AddingMoreDebt onClick={() => setReady(false)}>Update Your Current Debts</S.AddingMoreDebt>
      <S.Wrapper>
        <S.ContainerInput>
          <Title />
          <InputAPR onChange={handleApr} value={selectAPR} />
          <InputLoanTerm onChange={handleMonth} value={selectMonth} />
        </S.ContainerInput>
        <S.ContainerTotal>
          <div><p>New total Repayment </p><span>${(newDebt.newAmount).toFixed(2)}</span></div>
          <div><p>Current Total Repayment </p><span>${(oldDebt.oldAmount).toFixed(2)}</span></div>
          <div><p>Total Repayment Savings </p><span>${(oldDebt.oldAmount - newDebt.newAmount).toFixed(2)}</span></div>
        </S.ContainerTotal>
        <S.ContainerMonth>
          <div><p>New Monthly Repayment </p><span>${(newDebt.newMonth).toFixed(2)}</span></div>
          <div><p>Current Monthly Repayment </p><span>${(oldDebt.oltMonth).toFixed(2)}</span></div>
          <div><p>Total Monthly Savings </p><span>${(oldDebt.oltMonth - newDebt.newMonth).toFixed(2)}</span></div>
        </S.ContainerMonth>
      </S.Wrapper>
    </>
  );
}

export default ConsolidatedDebts
