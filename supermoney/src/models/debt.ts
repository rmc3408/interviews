import { v4 as uuidv4 } from 'uuid';


export interface DebtType {
  id?: string
  debtName: string
  amount: number
  apr: number
  month: number
}

export class Debt implements DebtType {
  id: string
  debtName: string
  amount: number
  apr: number
  month: number

  constructor(name = 'Other', remainingAmount = '0', currentAPR = '0', monthlyPayment = '0') {
    this.id = uuidv4()
    this.debtName = name
    this.amount = parseFloat(remainingAmount)
    this.apr = parseFloat(currentAPR)
    this.month = parseFloat(monthlyPayment)
  }
}

