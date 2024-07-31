import React from 'react'

// type colorType = 'red' | 'green' | 'blue'

// type propType = {
//   background: colorType
//   font: number
//   active: boolean
//   textColor: colorType
// }

type functionType = {
  user: () => void
}

type styleProp = {
  style: {
    backgroundColor: string
    fontSize: number
    color: string
  }
}

// type stylePropTwo = {
//   backgroundColor: string
//   fontSize: number
//   color: string
// }

const Props = (
//   { backgroundColor, fontSize, color }: stylePropTwo,
  { style }: styleProp
) => {
  const user = () => {
    console.log('Benard')
  }
  return (
    <>
      <div style={style} onClick={() => user()}>
        Hello
      </div>

    </>
  )
}

export default Props
