import { number } from 'zod'

type userDetails = {
  name: string
  phone: string
  email: string
  lastName?: string
}

interface fullDetails extends userDetails {
  account: string
  accountName: string
  bankName: string
}

const kay: fullDetails = {
  name: 'Olukayode',
  phone: '08168325494',
  email: 'olukayodeazeez2000@gmail.com',
  lastName: 'Azeez',
  account: '0229365299',
  accountName: 'Azeez Olukayode',
  bankName: 'Gtb',
}

function userInfo(user: fullDetails) {
  console.log(`Hello ${user.name}`)
}

userInfo(kay)
interface IAuthor {
  id: number
  title: string
}

interface ICategory {
  id: number
  details: string
}

interface IPost {
  id: number
  title: string
  desc: string
  extra: IAuthor[] | ICategory[]
}

const userOne: IPost = {
  id: 12233,
  title: 'Hello',
  desc: 'Hello there',
  extra: [
    {
      id: 123,
      details: 'Bola',
    },
    {
      id: 123,
      details: 'Bola',
    },
  ],
}

interface IPostBetter<T> {
  id: number
  title: string
  desc: string
  extra: T[]
}

const user: IPostBetter<String> = {
  id: 12233,
  title: 'Hello',
  desc: 'Hello there',
  extra: ['Hello', 'Ben'],
}

interface IPostEvenBetter<T extends object> {
  id: number
  title: string
  desc: string
  extra: T[]
}


const userKay: IPostEvenBetter<IAuthor> = {
  id: 12233,
  title: 'Hello',
  desc: 'Hello there',
  extra: [
    {
      id: 123,
      title: 'Bola',
    },
    {
      id: 123,
      title: 'Bola',
    },
  ],
}
