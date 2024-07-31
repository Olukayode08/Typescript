import {  type PropsWithChildren } from "react"

// type UsingImport = PropsWithChildren<{
//   name: string
//   id: number
// }>

// const Return = ({ name, id, children }: UsingImport) => {
//   return (
//     <main>
//       <h2>Prop in Typescript</h2>
//       <p>{name} </p>
//       <p> {id}</p>
//       {children}
//     </main>
//   )
// }

interface ComponentProps {
  name: string
  id: number
  children?: React.ReactNode
}

const Return = ({ name, id, children }: ComponentProps) => {
  return (
    <main>
      <h2>Return and Props in Typescript</h2>
      <p>{name} </p>
      <p> {id}</p>
      {children}
    </main>
  )
}

// Using props

// const Return = (props: ComponentProps) => {
//   return (
//     <main>
//       <h2>Prop in Typescript</h2>
//       <p>{props.name} </p>
//       <p> {props.id}</p>
//     </main> 
//   )
// }



export default Return
