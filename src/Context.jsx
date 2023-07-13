import { createContext, useContext, useEffect, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches
  const storedDarkMode = localStorage.getItem('isDarkTheme') === 'true'

  return storedDarkMode || prefersDarkMode
}

const Context = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  const [searchValue, setSearchValue] = useState('cat')

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    localStorage.setItem('isDarkTheme', newDarkTheme)
  }
  // Everytime isDarkTheme value changes useEffect functionality will
  // check for its value and based on it will update the class of the body.
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])
  return (
    <GlobalContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchValue, setSearchValue }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default Context
