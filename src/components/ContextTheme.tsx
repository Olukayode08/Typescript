import { useAppContext } from './ContextApi'

const ContextTheme = () => {
  const {
    state,
    increment,
    // updateText,
    theme,
    changeTheme,
    handleChange,
    details,
    setState,
    setTheme,
  } = useAppContext()

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // This takes the previous state of the text, then creates a new object with the previous state (...prevState) and updates the text property with the new value from the input (e.target.value).
    // updateText(e.target.value)
    setState((prevState) => ({ ...prevState, text: e.target.value }))
  }

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <br />
      <label>Text Update</label>
      <input type='text' value={state.text} onChange={handleTextChange} />
      <label>Name</label>
      <input name='name' type='text' value={details.name} onChange={handleChange} />
      <label>Email</label>
      <input name='email' type='email' value={details.email} onChange={handleChange} />
      <label>Password</label>
      <input name='password' type='password' value={details.password} onChange={handleChange} />
      <label>Confirm Password</label>
      <input
        type='password'
        name='confirmPassword'
        value={details.confirmPassword}
        onChange={handleChange}
      />
      <p>Text: {state.text}</p>
      <button onClick={changeTheme}>Toggle Theme</button>
    </>
  )
}

export default ContextTheme
