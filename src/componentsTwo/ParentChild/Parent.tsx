import React from 'react'

type childrenType ={
    children: React.ReactNode
}

const Parent = ({ children }: childrenType) => {
  return (
    <div>
      <h1>This is the Parent Component</h1>
      {children}
    </div>
  )
}

export default Parent