console.log(this)
function abc () {
  console.log(this)
}
abc()

let obj = {
  name: 'rupesh',
  age: 12,
  sayname: function () {
    console.log(this)
  }
}

obj.sayname()

document.querySelector('h1').addEventListener('click', function () {
  alert()
  console.log((this.style.color = 'green'))
})

class Test {
  constructor (parameters) {
    console.log('test ')
    this.a = 12
    this.b = "rupesh",
    this.c = true,
    this.d = null,
    this.e = undefined
  }
}

let a = new Test()
console.log(a);
