// ----- GENERICS 101 ----- //
// make generic or reusable structures (functions, interfaces, classes) that can be used by many data types, pass data types into the structures

function logAndReturnString(val: string): string {
  console.log(val)
  return val
}
function logAndReturnNumber(val: number): number {
  console.log(val)
  return val
}
function logAndReturnBoolean(val: boolean): boolean {
  console.log(val)
  return val
}

// generic function
function logAndReturnValue(val: any): any {
  console.log(val)
  return val
}
