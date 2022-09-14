import axios from 'axios'
import constants from '../../constants'

const instance = axios.create({
  baseURL: constants.baseUrl,
});

export function FetchUserData (userId) {
  const getUserData = instance.get(constants.userInfosPath(userId))
  return getUserData
}

export function FetchActivityData (userId) {
  const getActivityData = instance.get(constants.userActivityPath(userId))
  return getActivityData
}

export function FetchAvgSesssionsData ( userId) {
  const getAvgSesssionsData = instance.get(constants.userAvgSesssionsPath(userId))
  return getAvgSesssionsData
}

export function FetchPerformanceData (userId) {
  const getPerformanceData = instance.get(constants.userPerformancePath(userId))
  return getPerformanceData
}
