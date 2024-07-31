

// Generics
// Generics allow writing functions in any data type
let array1: Array<string> = ['Apple', 'Banana', 'Mango']
let array2: Array<number> = [1, 2, 3]
let array3: Array<boolean> = [true, false, true]

// function createString(arg: string):string{
//     return arg
// }

// function createNumber(arg: number): number {
//   return arg
// }

// With generic Instead a creating multiple functions with different types, we can do this instead.
// This arguement can wwreceive any type and return any type
function genericFunction<T>(arg: T): T {
  return arg
}

const genericString = genericFunction<string>('Hello world')
const genericNumber = genericFunction<number>(20)

// Generic Interface
// The T simply denotes that the value can be of any type

interface GenericInterface<T> {
  value: T
  getValue: () => T
}

const interfaceString: GenericInterface<string> = {
  value: 'Hello there',
  getValue() {
    return interfaceString.value
  },
}

const interfaceNumber: GenericInterface<number> = {
  value: 3,
  getValue: () => interfaceNumber.value,
}

// Anytime you have the async function, you need to set Promise<string> as a return type because it is a generic
async function someStringFunc(): Promise<string> {
  return 'Hello there'
}

async function someNumberFunc(): Promise<number> {
  return 23
}

// Challenge

function genericStringArray(length: number, text: string): string[] {
  // This denotes that the result is an array of sting. Nut initially an empty array
  let result: string[] = []

  // result = Array(length).fill(text) is the core of the function.
  // Array(length) creates a new array with the specified length.
  // .fill(text) fills all elements of the newly created array with the provided text.
  // The result of this operation is assigned back to the result variable
  result = Array(length).fill(text)
  return result
}

console.log(genericStringArray(3, 'Hello'))

function universalGeneric<T>(firstArg: number, secondArg: T): Array<T> {
  let result: T[] = []
  result = Array(firstArg).fill(secondArg)
  return result
}

console.log(universalGeneric<string>(3, 'bolaji'))
console.log(universalGeneric<number>(3, 200))

// Generics with multiple types

function multipleGeneric<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2]
}

console.log(multipleGeneric<number, string>(20, 'Olukayode'))

// Limiting the type to a string
// We can also use union type eg string | number
function processValue<T extends string | number>(value: T): T {
  return value
}

console.log('Process value', processValue('Olukayode Azeez'))

// Generic Continue

type Car = {
  brand: string
  model: string
}

const car: Car = {
  brand: 'ford',
  model: 'mustang',
}

type Product = {
  name: string
  price: number
}

const product: Product = {
  name: 'shoes',
  price: 1.99,
}

type Student = {
  name: string
  age: number
}

const student: Student = {
  name: 'peter',
  age: 20,
}

// const printName = <T extends Student>(input: T) => {
//   console.log(input.name)
// }
// printName(student)

const printName = <T extends { name: string }>(input: T) => {
  console.log(input.name)
}
printName(student)
printName(product)

// Example
// interface StoreData<T>{
//     data: T[]
// }

const storeNumbers: StoreData<number> = {
  data: [1, 2],
}

// Not sure of what value to have in the array
// const randomItems:StoreData<any> ={
//     data: ['Ben', 'Bola', 'Ogechi', 2]
// }

// OR
interface StoreData<T = any> {
  data: T[]
}

const randomItems: StoreData = {
  data: ['Ben', 'Bola', 'Ogechi', 2],
}

// Fetching Data with axios
const url = 'https://www.course-api.com/react-tours-project'


// If we put something here and it's not in the data, It'll be undefined
type Tour = {
  id: string,
  name: string,
  info: string,
  image: string,
  price: string,
//   bool: boolean
}

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url)

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data:Tour[] = await response.json()
    console.log(data);
    
    return data
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : 'there was an error...'
    console.error(errMsg)
    // throw error;
    return []
  } 
}

const tours = await fetchData(url)
tours.map((tour) => {
  console.log(tour.name)
})

// const fetchTours = async () => {
//   try {
//     const res = await fetch(url)
//     const data = await res.json()

//     if (!res.ok) {
//       throw new Error(`No servere response: ${res.status}`)
//     }
//     return data
//   } catch (error) {
//     const errorType = error instanceof Error ? error.message : 'Unknown Error' 
//     console.log(errorType);
//   }
// }

// Validate Data at run time
// Use zod to validate submissions on the client as well as server actions on the server


// Class syntax in Typescript

class Book {
  title: string
  author: string
  constructor(title: string, author: string) {
    this.title = title
    this.author = author
  }
}

const deepWork = new Book('deep work ', 'cal newport')



