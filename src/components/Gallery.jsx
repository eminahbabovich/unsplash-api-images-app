import { useQuery } from '@tanstack/react-query'
import customFetch from '../utils'
import { useGlobalContext } from '../Context'
const Gallery = () => {
  const { searchValue } = useGlobalContext()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['photos', searchValue],
    queryFn: async () => {
      const { data } = await customFetch.get('/', {
        params: {
          query: searchValue,
          page: '10',
        },
      })
      return data
    },
  })
  if (isLoading) {
    return (
      <section className="image-container">
        <h2>Loading...</h2>
      </section>
    )
  }
  if (isError) {
    return (
      <section className="image-container">
        <h2>There was an error...</h2>
      </section>
    )
  }
  if (data.results.length < 1) {
    return (
      <section className="image-container">
        <h2>No results found...</h2>
      </section>
    )
  }

  return (
    <section className="image-container">
      {data.results.map((item) => {
        return (
          <img
            className="img"
            key={item.id}
            src={item?.urls?.regular}
            alt={item.alt_description}
          />
        )
      })}
    </section>
  )
}
export default Gallery
