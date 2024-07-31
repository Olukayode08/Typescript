// interface ProfileCardsProps {
//   type: 'basic' | 'advanced'
//   name: string
//   email?: string
// }

// const Challenge = (props: ProfileCardsProps) => {
//   const { type, name, email } = props

//   const alertType = type === 'basic' ? 'alert-success' : 'alert-danger'
//   const className = `${alertType}`
//   return (
//     <>
//       <h2>React and Typescript Challenge</h2>

//       <article className={className}>
//         <h2>user: {name}</h2>
//         {type === 'advanced' ? <h2>email: {email}</h2> : null}
//       </article>
//     </>
//   )
// }

type BasicProfileCardProps = {
  type: 'basic'
  name: string
}

type AdvancedProfileCardProps = {
  type: 'advanced'
  name: string
  email: string
}
type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps

const Challenge = (props: ProfileCardProps) => {
  const { type, name } = props
  if (type === 'basic')
    return (
      <article className='alert alert-success'>
        <h2>user : {name}</h2>
      </article>
    )

  return (
    <article className='alert alert-danger'>
      <h2 style={{backgroundColor: 'red'}}>user : {name}</h2>
      <h2>email : {props.email}</h2>
    </article>
  )
}

export default Challenge
