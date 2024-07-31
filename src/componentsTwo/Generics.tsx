import React from 'react'

type genericsType<T> = {
    id: number,
    name: string,
    user: T[]
}

const Generics = (props: genericsType<Object>) => {
  return (
    <>

    
    </>
  )
}

export default Generics