import axios from 'axios'

const customFetch = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  headers: {
    Authorization: 'Client-ID G-k97sosdRhHnJVlDWjXeyclHmhtKw24sqryVdO5-Mk',
  },
})

export default customFetch
