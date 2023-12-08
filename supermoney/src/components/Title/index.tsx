import { memo } from 'react'
import * as S from './style'

function Title() {
  return (
    <div>
      <S.Title>Debt Consolidation Savings Calculator</S.Title>
      <S.SubTitle>Enter the details of your current unsecured debt and see how much you may
        be able to save after consolidating the debts into a single loan. Only include
        credit card debt, medical debt, personal loan debt, and other
        types of unsecured debt.</S.SubTitle>
    </div>
  )
}

export default memo(Title)