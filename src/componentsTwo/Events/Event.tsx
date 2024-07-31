import React, { useState } from 'react'

const Event = () => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(details)
  }

  const handleDelete = (id: number) => {
    console.log(`Post ${id} has been deleted`)
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eum.
        </h5>
        <label>Name</label>
        <input
          name='name'
          onChange={handleChange}
          value={details.name}
          type='text'
        />
        <label>Email</label>
        <input
          name='email'
          onChange={handleChange}
          value={details.email}
          type='email'
        />
        <label>Password</label>
        <input
          name='password'
          onChange={handleChange}
          value={details.password}
          type='password'
        />
        <button>Submit</button>
        <button onClick={() => handleDelete(1)}>Delete</button>
      </form>
    </>
  )
}

export default Event
