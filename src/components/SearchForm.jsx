import { useState } from 'react'
import { useGlobalContext } from '../Context'

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext()

  // Just a local state
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    if (!value) return
    setSearchValue(value)
  }
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn" type="submit" onClick={handleSubmit}>
          search
        </button>
      </form>
    </section>
  )
}
export default SearchForm
