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
    return <h2>Loading...</h2>
  }

  return (
    <section className="image-container">
      {data.results.map((item) => {
        return <img className="img" key={item.id} src={item.urls.regular} />
      })}
    </section>
  )
}
export default Gallery
