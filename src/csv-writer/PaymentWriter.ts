import { CSVWriter } from './app'

type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[]

const writer = new CSVWriter(['id', 'amount', 'to', 'notes'])
writer.addRows([
  { id: 1, amount: 50, to: 'yoshi', notes: 'for design work' },
  { id: 2, amount: 100, to: 'luigi', notes: 'for ghostbusting' },
])

writer.save('payments')
