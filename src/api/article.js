import axios from './axios'

const getArticle = slug => {
  return axios.get('/articles/' + slug)
}

const deleteArticle = slug => {
  return axios.delete('/articles/' + slug)
}

export default {
  getArticle,
  deleteArticle
}
