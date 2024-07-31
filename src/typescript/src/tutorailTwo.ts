// Type Alias
type User = {
  id: number
  name: string
  isActive: boolean
}

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
}

const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
}

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`)
  return user
}
createUser(susan)

type StringOrNumber = string | number

let num: string | number = '30000'
num = 23
num = 'Olukayode'

let value: StringOrNumber
value = 'Olukayode'
value = 20

// Challenge
type Employee = {
  id: number
  name: string
  department: string
}

type Manager = {
  id: number
  name: string
  employees: Employee[]
}

let benson: Employee = { id: 1, name: 'Benson', department: 'IT' }
let bola: Employee = { id: 1, name: 'Bola', department: 'Boss' }
let segun: Employee = { id: 1, name: 'Seun', department: 'IT' }
let gbenga: Manager = { id: 1, name: 'Kay', employees: [benson, bola, segun] }

type Staff = Employee | Manager

// void: This indicates that the function doesn't return any value (it returns undefined).
function PrintStaffDetails(staff: Staff): void {
  if ('employees' in staff) {
    console.log(`${staff.name} is a manager in the ${staff.employees.length}`)
  } else {
    console.log(
      `${staff.name} is a manager in the ${staff.department} department`
    )
  }
}

// Intersection Type with Union
type Book = {
  id: number
  name: string
  price: number
}

// type DiscountedBook = {
//   id: number
//   name: string
//   price: number
//   discount: number
// }

const book1: Book = { id: 1, name: 'The Dragons', price: 2000 }
const book2: Book = { id: 2, name: 'The Pest', price: 1200 }
// const discountedBook: DiscountedBook = {
//   id: 3,
//   name: 'The Winners',
//   price: 700,
//   discount: 10,
// }

// type discountedBook = Book & { discount: number }
// OR
const discountedBook: Book & { discount: number } = {
  id: 3,
  name: 'The Winners',
  price: 700,
  discount: 10,
}

// Interface Types
// We can use interface instaed of type
// We can't modify what is read only
interface HelpBook {
  readonly isbn: number
  title: string
  author: string
  genre?: string
}
const helpWord: HelpBook = {
  isbn: 123,
  title: 'Deep work',
  author: 'Olukayode Azeez',
  genre: 'Biography',
}

// Methods in interface
interface ReadBook {
  readonly isbn: number
  title: string
  author: string
  genre?: string
  printAuthor(): void
  printTitle(message: string): string
  //   Another way to use methods in interfaces
  printSomething: (num: number) => number
}

const readWord: ReadBook = {
  isbn: 123,
  title: 'Read work',
  author: 'Olukayode Azeez',
  genre: 'Biography',
  //   printAuthor() {
  //     console.log(readWord.author)
  //     // Both works
  //     // console.log(this.author)
  //   },
  printTitle(message) {
    return `${readWord.title} ${message}`
  },
  // first Option
  //   printSomething: function (num) {
  //     return num * 2
  //   },
  // Second Option
  //   printSomething: (num) => {
  //     console.log(readWord.author)
  //     return num + 2
  //   },
  // Third Option
  printSomething(num) {
    return num - 2
  },
  printAuthor: () => {
    console.log(readWord.author, 'Fullname')
  },
}

readWord.printAuthor()
const feedback = readWord.printTitle('Written by Olukay')
console.log(feedback)

console.log(readWord.printSomething(20))

// Challenge
interface Computer {
  readonly id: number
  brand: string
  ram: number
  storage?: number
  upgradeRam(number: number): number
  //   upgradeRam: (number: number) => number
}

let mac: Computer = {
  id: 30,
  brand: 'Macbook',
  ram: 10,
  storage: 500,
  upgradeRam: (num) => {
    return num + mac.ram
  },
}

let hp: Computer = {
  id: 31,
  brand: 'HP',
  ram: 5,
  storage: 200,
  //   upgradeRam: (num) => {
  //     return num + hp.ram
  //   },
  upgradeRam(num) {
    return num + hp.ram
  },
}
let dell: Computer = {
  id: 32,
  brand: 'Dell',
  ram: 5,
  //   upgradeRam: (num) => {
  //     return num + dell.ram
  //   },
  //   OR
  upgradeRam(num) {
    return num + dell.ram
  },
}

const gadgets: {}[] = [mac, hp, dell]
console.log(gadgets)
console.log(dell.upgradeRam(10))

// Interface Merging
interface Person {
  name: string
  getDetails: () => string
}

interface Person {
  id: number
  age: number
}

interface DogOwner {
  dogName: string
  getDogDetails: () => string
}

// const person: Person&({age: number}) = {
//     name: 'Kay',
//     age: 20,
//     getDetails: ()=>{
//         return `${person.name} is a Developer of ${person.age} years `
//     }
// }

const person: Person = {
  id: 10,
  name: 'Kay',
  age: 20,
  getDetails: () => {
    return `${person.name} is a Developer of ${person.age} years `
  },
}

console.log(person.getDetails())

// Extending Interface
// This is used when you need the whole ppt in a specific interface but you also need to other properties.

// NB: You can extend more than one interface
interface Boss extends Person {
  bossId: number
}
interface People extends DogOwner, Person {}
const boss: Boss = {
  id: 17,
  bossId: 12,
  name: 'Big Boss',
  age: 25,
  getDetails: () => {
    return `${person.name} is a Boss of ${person.age} years `
  },
}

// Challenge
interface Person2 {
  name: string
}
interface DogOwner2 extends Person2 {
  dogname: string
}

interface Manager2 extends Person {
  managePeople: () => void
  delegateTask(): void
}

const getEmployee = (): Person2 | DogOwner2 | Manager2 => {
  const random = Math.random()
  if (random < 0.33) {
    return {
      name: 'John',
    }
  } else if (random < 0.66) {
    return {
      name: 'Bem',
      dogname: 'Pablo',
    }
  } else {
    return {
      name: 'Bola',
      managePeople: () => {
        console.log('Managing People...')
      },
      delegateTask() {
        console.log('Delagate Task...')
      },
    }
  }
}

const employee = getEmployee()

console.log(employee, 'Employee')

const isManager = (obj: Person2 | DogOwner2 | Manager2) => {
  return 'managePeople' in obj
}

console.log(isManager(employee))


// Differece btw Interface and Type
