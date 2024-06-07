// -- CSV WRITER PROJECT -- //
import { appendFileSync } from 'fs'
import { Payment } from './interfaces/payment'

export class CSVWriter<T> {
  constructor(private columns: (keyof T)[]) {
    this.csv = this.columns.join(',') + '\n'
  }

  private csv: string

  save(filename: string): void {
    appendFileSync(`./data/${filename}.csv`, this.csv)
    this.csv = '\n'

    console.log('FILE SAVED TO ', filename)
  }

  addRows(val: T[]): void {
    let rows = val.map((v) => this.formatRow(v))

    this.csv += rows.join('\n')

    console.log(this.csv)
  }

  private formatRow(obj: T): string {
    return this.columns.map((col) => obj[col]).join(',')
  }
}
