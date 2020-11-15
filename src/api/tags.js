import axios from './axios'

export const getTags = () => {
  return axios.get('/tags')
}
