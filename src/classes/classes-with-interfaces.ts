//  CLASSES WITH INTERFACES  //

interface HasFormatter {
  format(): string
}

class MenuItem implements HasFormatter {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} - $${this.price}`
  }

  format(): string {
    return `'${this.title}' is $${this.price}`
  }
}

function printFormatted(val: HasFormatter): void {
  console.log(val.format())
}

const item = new MenuItem('marios special', 15)

printFormatted(item)
