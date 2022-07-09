import axios from 'axios'
import FeedbacksServices from './feedbacks'

const API_ENVS = {
  local: 'http://localhost:3000',
  production: 'https://backend-treinamento-vue3-five.vercel.app',
  development: ''
}

const httpClient = axios.create({
  baseURL: API_ENVS[process.env.NODE_ENV as keyof typeof API_ENVS] || API_ENVS.local
})

httpClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  const canThrowAnError =
      error.request.status === 0 || error.request.status === 500
  if (canThrowAnError) {
    throw new Error(error.message)
  }

  return error
}
)

export default {
  feedbacks: FeedbacksServices(httpClient)
}
