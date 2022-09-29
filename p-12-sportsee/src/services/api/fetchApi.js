import axios from 'axios'
import constants from '../../constants'

const instance = axios.create({
  baseURL: constants.baseUrl,
})

export function fetchUserData(userId) {
  const getUserData = instance.get(constants.userInfosPath(userId))
  return getUserData
}

export function fetchActivityData(userId) {
  const getActivityData = instance.get(constants.userActivityPath(userId))
  return getActivityData
}

export function fetchAvgSesssionsData(userId) {
  const getAvgSesssionsData = instance.get(constants.userAvgSesssionsPath(userId))
  return getAvgSesssionsData
}

export function fetchPerformanceData(userId) {
  const getPerformanceData = instance.get(constants.userPerformancePath(userId))
  return getPerformanceData
}
