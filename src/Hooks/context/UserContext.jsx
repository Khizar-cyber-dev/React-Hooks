import React from 'react'

const createContext = React.createContext()

const ContextProvider = ({ children}) => {
    const [theme, setTheme] = React.useState('light')
  return (
    <createContext.Provider value={{theme, setTheme}}>
        {children}
    </createContext.Provider>
  )
}

export const useUserContext = () => React.useContext(createContext)

export default ContextProvider