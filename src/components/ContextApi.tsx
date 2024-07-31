import React, { createContext, useState, useContext } from 'react'

type AppState = {
  text: string
  count: number
}

type ThemeType = '' | 'light' | 'dark'

type DetailsType = {
  name: string
  email: string
  password: string
  confirmPassword: string
}


type AppContextType = {
  state: AppState
  increment: () => void
  updateText: (newText: string) => void
  theme: ThemeType
  details: DetailsType
  changeTheme: () => void
  setState: React.Dispatch<React.SetStateAction<AppState>>
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
type ChildrenType = {
  children: React.ReactNode
}
// If the type is a string to be used in our value{{'value'}}
// const TypescriptContext = createContext<string | undefined>(undefined)

const TypescriptContext = createContext<AppContextType | undefined>(undefined)

const ContextApi = ({ children }: ChildrenType) => {
  const [state, setState] = useState<AppState>({ count: 0, text: '' })
  const [theme, setTheme] = useState<ThemeType>('')
  const [details, setDetails] = useState<DetailsType>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const increment = () => {
    setState((prevState) => ({ ...prevState, count: prevState.count + 1 }))
  }

  const updateText = (newText: string) => {
    setState((prevState) => ({ ...prevState, text: newText }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails((prevState)=> ({...prevState, [e.target.name]: e.target.value} ))
  }

  const changeTheme = () => {
    if (theme === '') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('')
    }
    return
  }
  return (
    <>
      <TypescriptContext.Provider
        value={{
          state,
          increment,
          updateText,
          theme,
          changeTheme,
          setState,
          setTheme,
          handleChange,
          details,
 
        }}
      >
        {children}
      </TypescriptContext.Provider>
    </>
  )
}
export default ContextApi

export const useAppContext = (): AppContextType => {
  const context = useContext(TypescriptContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
