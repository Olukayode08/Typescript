import React, { useEffect, useRef } from 'react'



const UseRef = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    nameRef.current?.focus()
  }, [])

  const handleClick = () => {
    console.log(`name is: ${nameRef.current?.value}`)
  }
  return (
    <>
      <div>
        <h2>Typescript with UseRef</h2>
        <input ref={nameRef} type='text' placeholder='Name' />
        <input ref={emailRef} type='email' placeholder='Email' />
        <button onClick={handleClick}>Send</button>
      </div>
    </>
  )
}

export default UseRef
