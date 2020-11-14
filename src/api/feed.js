import axios from './axios'

export const getFeed = apiUrl => {
  return axios.get(apiUrl)
}
