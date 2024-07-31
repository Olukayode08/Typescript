import React, { useState } from 'react'
type Person = {
  name: string
}

const Events = () => {
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')

  //   To provide the type of an event (e)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // This returns all the data as an Object
    const formData = new FormData(e.currentTarget)
    // This gets the data from the form data as an Object
    const data = Object.fromEntries(formData)
    console.log(data)
    // To get the text of the data being passed in the input
    const text = formData.get('text') as string
    console.log(text);
    // To get the email of the data being passed in the input
    const email = formData.get('email') as string

    // const personName: Person = { name: text }
    const personName: Person = { name: data.text as string }

    console.log(personName)
  }
  return (
    <>
      <section>
        <h2>Events Example</h2>
        <form className='form' onSubmit={handleSubmit}>
          <input
            type='text'
            className='form-input mb-1'
            name='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type='email'
            className='form-input mb-1'
            name='email'
            value={email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={handleChange}
          />
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default Events
