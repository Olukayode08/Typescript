import { personName } from './tutorialThree'
// Type Guard

type ValueType = string | number | boolean

let value: ValueType
const random = Math.random()
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true

function checkValue(valueType: ValueType): void {
  if (typeof valueType === 'string') {
    console.log(valueType.toLowerCase())
    return
  } else if (typeof valueType === 'number') {
    console.log(valueType.toFixed(2))
    return
  } else {
    console.log('boolean', valueType)
  }
}

checkValue(value)

type Dog = { type: 'dog'; name: string; bark: () => void }
type Cat = { type: 'cat'; name: string; meow: () => void }
type Animal = Dog | Cat

// function makeSound(animal: Animal) {
//   if (animal.type === 'dog') {
//     animal.bark()
//   } else {
//     animal.meow()
//   }
// }

//Using the Property
function makeSound(animal: Animal) {
  if ('bark' in animal) {
    animal.bark()
  } else {
    animal.meow()
  }
}

let myDog: Dog = {
  type: 'dog',
  name: 'pablo',
  bark() {
    console.log(myDog.name)
  },
}

makeSound(myDog)
type Thruthy = string | null | undefined

function printLength(str: Thruthy) {
  if (typeof str === 'string') {
    console.log(str.length)
  } else {
    console.log('No string Prrovided')
  }
}

printLength(undefined)

// Instance of Type guard
// In this examole, we can't do error.message because typescript has to know if the error is a string
try {
  throw new Error('This is an error')
} catch (error) {
  if (error instanceof Error) {
    console.log(`Caught an error`, error.message)
  } else {
    console.log('Unknown error')
  }
}

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString()
  }
  return input
}

const year = checkInput(new Date())
const todaysDate = checkInput('2024-06-18')

console.log(year)
console.log(todaysDate)

// Type Predicate
type Student = {
  name: string
  study: () => void
}

type User = {
  name: string
  login: () => void
}

type Person = Student | User

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: 'john', study: () => console.log('Studying') }
    : { name: 'mary', login: () => console.log('Logging in') }
}

const person = randomPerson()

// const isStudent = (person: Person) => {
//   if ('study' in person) {
//    return console.log('This is a student')
//   } else if ('study' === undefined) {
//     console.log('This is a person')
//   }else{
//     console.log('This is a user');

//   }
// }

const isStudent = (person: Person): person is Student => {
  // return 'study' in person
  return (person as Student).study !== undefined
}
if (isStudent(person)) {
  person.study()
} else {
  person.login()
}
// Discriminating Unions
type IncrementAction = {
  amount: number
  timestamp: number
  user: string
  type: 'increment'
}

type DecrementAction = {
  amount: number
  timestamp: number
  user: string
  type: 'decrement'
}

type Action = IncrementAction | DecrementAction

const reducer = (curr: number, acc: Action) => {
  if (acc.type === 'increment') {
    return curr + acc.amount
  } else if (acc.type === 'decrement') {
    return curr - acc.amount
  } else {
    throw new Error('Unknown Action:')
  }
}

const newState = reducer(15, {
  amount: 12,
  timestamp: 12345,
  user: 'john',
  type: 'decrement',
})

console.log(newState);


// - Write a reducer function that takes the current state and an action, and returns the new state. The reducer function should use a switch statement or if-else chain on the type property of the action to handle each action type differently.

// - In the default case of the switch statement or the final else clause, perform an exhaustive check by assigning the action to a variable of type never. If there are any action types that haven't been handled, TypeScript will give a compile error.

// - Implement the logic for each action type in the reducer function. This typically involves returning a new state based on the current state and the properties of the action.

// - Use the reducer function in your application to handle actions and update the state.
