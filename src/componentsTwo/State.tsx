import React, { useState } from 'react'

type userType = {
  name: string
  sessionId: number
}

const State = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState<userType | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUser({
      name: username,
      sessionId: Math.random(),
    })
  }
  return (
    <>
      <div>
        {user ? (
          `${user.name} is logged in`
        ) : (
          <form onSubmit={handleSubmit}>
            <label>User Name</label>
            <input
              type='text'
              onChange={handleChange}
              value={username}
              name='username'
            />
            <button>Submit</button>
          </form>
        )}
        {user?.name}
      </div>
    </>
  )
}

export default State
