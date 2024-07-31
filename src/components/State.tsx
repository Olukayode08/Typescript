import { useState } from 'react'

interface Link {
  id: number
  url: string
  text: string
}
const navLinks:Link[] = [
  {
    id: 1,
    url: '/home',
    text: 'Home',
  },
  {
    id: 2,
    url: '/about',
    text: 'About',
  },
  {
    id: 3,
    url: '/contact',
    text: 'Comtact',
  },
]

const State = () => {
  const [text, setText] = useState('Olukayode')
  const [number, setNumber] = useState(90)
  const [list, setList] = useState<string[]>([])
  const [links, setLinks] = useState<Link[]>(navLinks)
  return (
    <div>
      <h2 className='mb-1'>State in Typescript</h2>
      <button
        onClick={() => setText('Oluwaseun')}
        className='btn btn-center mb-1'
      >
        {text}
      </button>
      <button onClick={() => setNumber(5)} className='btn btn-center mb-1'>
        {number}
      </button>
      <button
        onClick={() => setList(() => ['Ben', 'Bola', 'Bayo'])}
        className='btn btn-center mb-1'
      >
        List here
      </button>
      <p className='mb-1'>{list}</p>
      <button
        className='btn btn-center mb-1'
        onClick={() => {
          setLinks([...links, { id: 4, url: '/login', text: 'Login' }])
        }}
      >
        Links
      </button>
      {links.map((link) => {
        return (
          <div key={link.id}>
            <a href={link.url}>{link.text}</a>
            <p></p>
          </div>
        )
      })}
    </div>
  )
}

export default State
