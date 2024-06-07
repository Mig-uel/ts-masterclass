// -- CSV WRITER PROJECT -- //
import { appendFileSync } from 'fs'
import { Payment } from './interfaces/payment'

type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[]

class CSVWriter {
  constructor(private columns: PaymentColumns) {
    this.csv = this.columns.join(',') + '\n'
  }

  private csv: string

  save(filename: string): void {
    appendFileSync(`./data/${filename}.csv`, this.csv)
    this.csv = '\n'

    console.log('FILE SAVED TO ', filename)
  }

  addRows(val: Payment[]): void {
    let rows = val.map((v) => this.formatRow(v))

    this.csv += rows.join('\n')

    console.log(this.csv)
  }

  private formatRow(obj: Payment): string {
    return this.columns.map((col) => obj[col]).join(',')
  }
}

const writer = new CSVWriter(['id', 'amount', 'to', 'notes'])
writer.addRows([
  { id: 1, amount: 50, to: 'yoshi', notes: 'for design work' },
  { id: 2, amount: 100, to: 'luigi', notes: 'for ghostbusting' },
])

writer.save('payments')
