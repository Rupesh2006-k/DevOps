class Test {
  a = 12
  constructor () {
    this.b = 8
    this.c = 8
    console.log(this)
  }
}
let val = new Test()
console.log('====================================')
console.log(val)
console.log('====================================')

let fu = () => {
  console.log(this)
}
fu()
