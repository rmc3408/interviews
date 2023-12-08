import React from 'react'
import DebtTable from './DebtTable'
import * as S from './style'

interface CurrentProps {
  setReady: (ready: boolean) => void;
}

function CurrentDebts({ setReady }: CurrentProps) {
  return (
    <>
      <S.EnterTitle>Enter your current Debts</S.EnterTitle>
      <DebtTable setReady={setReady} />
    </>
  )
}

export default CurrentDebts