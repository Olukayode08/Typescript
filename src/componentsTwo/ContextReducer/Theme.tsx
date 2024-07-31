import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Theme = () => {
    const {state, dispatch} = useContext(ThemeContext)
    console.log(state);
    
  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: 'CHANGE_THEME' })}>
          Change Theme
        </button>
        <button onClick={() => dispatch({ type: 'CHANGE_FONTSIZE', payload: 22 })}>
          Change Font Size
        </button>
      </div>
    </>
  )
}

export default Theme