export interface Account {
  acc_number: string
  acc_name: string
  iban: string
  address: string
  amount: number
  type: 'sending' | 'receiving'
}
