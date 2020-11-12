import axios from 'axios'
import {getItem} from '@/helpers/localStorage'

axios.defaults.baseURL = 'http://localhost:8080/api'

axios.interceptors.request.use(config => {
  const accessToken = getItem('accessToken')
  config.headers.authorization = accessToken ? `Token ${accessToken}` : ''
  return config
})

export default axios
