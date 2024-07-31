// Tuples
let person: [string, number] = ['John', 25]
// let person: [string, number] = ['John', 25, 23] error

person.push('29')

// console.log(person)

const date: [number, number, number] = [12, 13, 12]

// Enum
enum ServerResStatus {
  success = 200,
  error = '500',
}

Object.values(ServerResStatus).forEach((value) => {
  if (typeof value === 'number') {
    console.log(value)
  }
})

interface ServerRes {
  result: ServerResStatus
  data: string[]
}

function getServerRes(): ServerRes {
  return {
    result: ServerResStatus.success,
    data: ['Serever Success 200'],
  }
}

const response = getServerRes()
// console.log(response)

// Challenge
enum UserRole {
  Admin,
  Role,
  Employee,
}

type User = {
  id: number
  name: string
  role: UserRole
  contact: [string, string]
}

function createUser(user: User): User {
  return user
}
const firstUser: User = {
  id: 4,
  name: 'Benson',
  role: UserRole.Role,
  contact: ['jire@gmail.com', '7890'],
}

const user = createUser(firstUser)
console.log(user)

// Unknown type
// You can't run a method with unknown
// In a try catch the type is unknown
let value: unknown

value = 'Boy'
value = [1, 2, 'Bolaji']
value = false

if (typeof value === 'number') {
  value.toFixed(2)
}

enum Color {
  Red,
  Blue,
  Green,
}

function getColor(color: Color) {
  switch (color) {
    case Color.Red:
      return 'Red'
    case Color.Blue:
      return 'Blue'
    case Color.Green:
      return 'Green'
    default:
      // If one of the value is not specified and we call it, This is how to control the error at build time and run time
      // At build time
      //   let UnexpectedColor: never = color

      // At run time error
      throw new Error(`Unexpected color Value ${color}`)
  }
}

console.log(getColor(Color.Red))
console.log(getColor(Color.Green))
console.log(getColor(Color.Blue))


//ES six Modules in Typescript
// We can export and Import Types in typescript

export function sayHello(name:string): void {
  console.log(`Hello, ${name}`);
} 

export let personName = 'susan'

// personName = 'Bola'

export type Student = {
  name: string,
  age: number
}

const newStudent: Student = {
  name: 'Ben',
  age: 30,
}

export default newStudent






