import { CSVWriter } from './app'
import { Payment } from './interfaces/payment'

const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes'])

paymentWriter.addRows([
  { id: 1, amount: 50, to: 'yoshi', notes: 'for design work' },
  { id: 2, amount: 100, to: 'luigi', notes: 'for ghostbusting' },
])

paymentWriter.save('payments')
