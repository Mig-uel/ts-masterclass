import { CSVWriter } from './app'

const paymentWriter = new CSVWriter(['id', 'amount', 'to', 'notes'])

paymentWriter.addRows([
  { id: 1, amount: 50, to: 'yoshi', notes: 'for design work' },
  { id: 2, amount: 100, to: 'luigi', notes: 'for ghostbusting' },
])

paymentWriter.save('payments')
