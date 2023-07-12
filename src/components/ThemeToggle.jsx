import { useGlobalContext } from '../Context'
import { FaMoon, FaSun } from 'react-icons/fa'
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  return (
    <div className="toggle-container">
      <button onClick={toggleDarkTheme} className="dark-toggle">
        <div className="toggle-icon">
          {isDarkTheme ? <FaMoon className="" /> : <FaSun />}
        </div>
      </button>
    </div>
  )
}
export default ThemeToggle
