import axios from 'axios'

export function FetchApi (userId) {
  const baseUrl = `http://localhost:3001/user/${userId}/`

  const getUserData = axios.get(baseUrl)
  const getActivityData = axios.get(baseUrl + 'activity')
  const getAvgSesssionsData = axios.get(baseUrl + 'average-sessions')
  const getPerformanceData = axios.get(baseUrl + 'performance')

  return Promise.all([getUserData, getActivityData, getAvgSesssionsData, getPerformanceData])
}
