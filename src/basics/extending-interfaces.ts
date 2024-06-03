// - EXTENDING INTERFACES - //

interface HasFormatter {
  format(): string // function signature - returns string
}

interface Bill extends HasFormatter {
  id: string | number
  amount: number
  server: string
}

const user = {
  id: 1,
  format(): string {
    return `${this.id}`
  },
}

const bill = {
  id: 2,
  amount: 50,
  server: 'mario',
  format(): string {
    return `[${this.id}] Bill owes $${this.amount}`
  },
}

/**
 * @desc A function that prints out text
 * @param {HasFormatter} val
 * @returns {void}
 */
function printFormatted(val: HasFormatter): void {
  console.log(val.format())
}

printFormatted(user)
printFormatted(bill)

/**
 * A function that prints out text
 * @param {Bill} val
 * @returns {void}
 */
function printBill(val: Bill): void {
  console.log(`[SERVER: ${val.server}]`)
  console.log(val.format())
}

// printBill(user) // error - param is not of type Bill
printBill(bill)
