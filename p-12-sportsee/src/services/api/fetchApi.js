import {useEffect, useState} from 'react'
import axios from 'axios'

export function FetchApi (userId) {
  const baseUrl = `http://localhost:3001/user/${userId}/`
  const [data, setData] = useState([])

  const getUserData = axios.get(baseUrl)
  const getActivityData = axios.get(baseUrl + 'activity')
  const getAvgSesssionsData = axios.get(baseUrl + 'average-sessions')
  const getPerformanceData = axios.get(baseUrl + 'performance')

  const fetchData = async () => {
    const result = await axios.all([getUserData,getActivityData,getAvgSesssionsData,getPerformanceData])
    setData(result)
  }

  console.log(data)
  useEffect(() => {
    fetchData()
  }, [])

  return (data)
}
