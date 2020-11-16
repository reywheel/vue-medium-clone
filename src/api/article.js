import axios from './axios'

const getArticle = slug => {
  return axios.get('/articles/' + slug)
}

const deleteArticle = slug => {
  return axios.delete('/articles/' + slug)
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
  addArticleToFavorite,
  deleteArticleFromFavorite
}
