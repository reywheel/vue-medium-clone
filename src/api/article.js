import axios from './axios'

export const getArticle = slug => {
  return axios.get('/articles/' + slug)
}
