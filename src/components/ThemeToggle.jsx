import { useGlobalContext } from '../Context'
import { FaMoon, FaSun } from 'react-icons/fa'
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  return (
    <section className="toggle-container">
      <button onClick={toggleDarkTheme} className="dark-toggle">
        <div className="toggle-icon">
          {isDarkTheme ? <FaMoon /> : <FaSun />}
        </div>
      </button>
    </section>
  )
}
export default ThemeToggle
