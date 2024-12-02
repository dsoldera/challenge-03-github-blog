import axios from 'axios'
import { env } from './env'

const api = axios.create({
  baseURL: env.VITE_GITHUB_BASE_URL,
})

export default api
