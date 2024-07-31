console.log('Typescript Tutorial')

// let name: string = 'Kay'
// name.toUpperCase()
// name = 'Bayo'
// // name = 30 error
// console.log(name);

// let num:number = 23
// num =  23 * 2
// // num = 'Ben' error
// console.log(num);

// let bool: boolean = false
// bool = true
// // bool = 'Bisi' error
// console.log(bool);

// // You don't neccessrily have to signify the type. This also works
// let lastName = 'Azeez'
// console.log(lastName);

// Challenge 1
let fullName = 'Olukayode Azeez'
fullName.toUpperCase()

let age = 19
age += 65
// console.log(age)

let isTeen = age >= 20
isTeen === false
// console.log(isTeen)

// Union Type. This accepts either a num, string bool. It has to be either of the three to prevent an error
let taxPaid: number | string | boolean = 20
taxPaid = '$20'
taxPaid = false
let status: 'pending' | 'active' | 'error' = 'pending'
status = 'pending'

// Type any
let randomType: any = 'Olukayode'
randomType = 30
randomType = true
randomType = [
  {
    name: 'Olukayode',
    status: 'Active',
  },
]

const books = ['1984', 'The Great Gatsby', 'The Catcher in the Rye']
let foundBook

books.forEach((book) => {
  if (book === 'The Great Gatsby') {
    foundBook = book
  }
})

for (let book of books) {
  if (book === 'The Great Gatsby') {
    foundBook = book
    break
  }
}

// Union Type Challenge
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'
orderStatus = 'shipped'
orderStatus = 'delivered'
console.log(orderStatus)

let discount: number | string = 29
discount = '20%'
console.log(discount)

// Arrays Types
// number Array
let prices: number[] = [1, 29, 60, 200]
// prices.push('20')
prices.push(20)

// String Array
let fruits: string[] = ['Apple', 'Banana', 'Orange']
// fruits.push(20)
fruits.push('Mango')

// Empty Array
let empty: [] = []

// Empty Array
let object: {}[] = [
  {
    brand: 'Toyota',
    year: 2000,
    status: false,
  },
  {
    brand: 'Tesla',
    year: 5000,
    status: true,
  },
]

//  Any Array
let items = ['Bread', 23, 60, 'Fish', false]

// Object Types
let car = {
  brand: 'Toyota',
  year: 2000,
  status: false,
}

// To use Type use Objects
let car2: {
  brand: string
  year: number
  status: boolean
} = {
  brand: 'Toyota',
  year: 2000,
  status: false,
}

let car3: {
  brand: string
  year: number
  status: boolean
} = {
  brand: 'Toyota',
  year: 2000,
  status: false,
}

let book = { title: 'New book', cost: 30 }
let pen = { title: 'New pen', cost: 12 }
let ruler = { title: 'New ruler' }

let schoolItems: { title: string; cost?: number }[] = [book, pen, ruler]

schoolItems[1].title = 'Fake Pen'
schoolItems.push({ title: 'New car', cost: 2000 })

// console.log(schoolItems)

// Functions
function greet(name: any) {
  console.log(`Hello there ${name}`)
}
greet('kay')
greet(false)

function price(number: number) {
  return number * 2
}
// console.log(price(2));

function calculate(number: number): number {
  const isPositive = false
  if (isPositive) {
    return number * 10
  }
  return number * 3
}
console.log(calculate(2))

// Challenge

const newNames: string[] = ['Ben', 'Seun', 'Kay', 'Fola']

function checkName(name: string): boolean {
  return newNames.includes(name)
}

let user: string = 'Jane'

if (checkName(user)) {
  console.log(`${user} is in the list`)
} else {
  console.log(`${user} is not in the list`)
}

console.log(checkName('Bola'))
console.log(checkName('Fola'))

// Optional Parameters
const calculateItem = (price: number, discount: number): number => {
  return price - discount
}
console.log('Item Price', calculateItem(2000, 50))

// If a variable is not specified out of the two, we have to make sure it is not compulsory (discount?: number) and ensure we declare a fallback (discount || 0)
const calculateFood = (price: number, discount?: number): number => {
  return price - (discount || 0)
}
console.log('Food Price', calculateFood(5000))

function calculateScore(intialScore: number, penalty: number = 0): number {
  return intialScore + penalty
}

// When penalty is not declared it defaults to zero
console.log('Score', calculateScore(3))
console.log('Score', calculateScore(3, 7))

// Rest Parameter
function sum(text: string, ...numbers: number[]) {
  let double = numbers.map((num) => num * 2)
  console.log('The numbers doubled are', double)

  let total = numbers.reduce((acc, curr) => {
    return acc + curr
  }, 0)
  return text + total
}

let result = sum('This sum is ', 1, 2, 3, 4, 5, 6, 7, 8, 9)

console.log(result)

// Challenge
function processInput(input: string | number) {
  if (typeof input === 'string') {
    console.log(input.toUpperCase())
  } else {
    console.log(input * 2)
  }
}
processInput(3)
processInput('Olukayode')

// Object as Parameters
function objectParameters({ id }: { id: number }): {
  id: number
  isActive: boolean
} {
  return { id, isActive: id % 2 === 0 }
}

console.log(objectParameters({ id: 16 }))
console.log(objectParameters({ id: 22 }))

function createStudent(
  student: { id: number; name: string },
  schoolName: { id: number; name: string }
) {
  console.log(student.id, student.name)
  console.log(schoolName.id, schoolName.name)
}

createStudent({ id: 1, name: 'Olukayode' }, { id: 2, name: 'Olukayode' })

// Challenge
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === 'number') {
    return input ** 2
  } else {
    //  input.toUpperCase(): Converts the input to uppercase.
    // .split(''): Splits the uppercase string into an array of individual characters.
    // .reverse(): Reverses the order of the characters in the array.
    // .join(''): Joins the reversed characters back into a single string.
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase()
  }
}


console.log(processData(2))
console.log(processData('Olukayode'))
console.log(processData('Bolaji', { reverse: true }))



