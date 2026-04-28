let obj = {
  name: 'rupesh',
  age: 12
}

function check (a, b, c) {
  console.log(this, a, b, c)
}

let a = check.bind(obj, 1, 2, 3)
a()