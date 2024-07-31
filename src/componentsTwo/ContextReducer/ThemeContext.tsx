import { createContext, useContext, useReducer } from 'react'

type stateType = {
  theme: string
  fontSize: number
}


type colorActionType = {
  type: 'CHANGE_THEME'
}

type fontActionType = {
  type: 'CHANGE_FONTSIZE'
  payload: number
}


type childrenType = {
  children: React.ReactNode
}

const INITIAL_STATE: stateType = {
  theme: 'dark',
  fontSize: 16,
}



export const ThemeContext = createContext<{
  state: stateType
//   Dispatch is a function, it cannot be just any function, It should be a React.Dispatch fuction that takes in only the actionType
  dispatch: React.Dispatch<colorActionType | fontActionType>
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
})

const reducer = (state: stateType, action: colorActionType | fontActionType) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' }
    case 'CHANGE_FONTSIZE':
      return { ...state, fontSize: action.payload }
    default:
      return state
  }
}

export const Context = ({ children }: childrenType) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <>
      <ThemeContext.Provider value={{
        state, dispatch
      }}>{children}</ThemeContext.Provider>
    </>
  )
}
