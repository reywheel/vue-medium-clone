import axios from './axios'

const getArticle = slug => {
  return axios.get('/articles/' + slug)
}

const deleteArticle = slug => {
  return axios.delete('/articles/' + slug)
}

const createArticle = article => {
  return axios.post('/articles', {article}).then(response => response.data.article)
}

const addArticleToFavorite = slug => {
  return axios.post('/articles/' + slug + '/favorite').then(response => response.data.article)
}

const deleteArticleFromFavorite = slug => {
  return axios.delete('/articles/' + slug + '/favorite').then(response => response.data.article)
}

export default {
  getArticle,
  deleteArticle,
  createArticle,
  addArticleToFavorite,
  deleteArticleFromFavorite
}
