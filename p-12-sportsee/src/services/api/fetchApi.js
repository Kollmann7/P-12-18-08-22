import axios from 'axios'
import constants from '../../constants'

const instance = axios.create({
  baseURL: constants.baseUrl,
  timeout: 1000
})
console.log(instance.get('http://localhost:3001/user/12'))
/**
 * @typedef UserDataProps 
 * @prop {number} userId
 */

/**
 *  This function realise a call API and get the user data
 * @param {number} userId - identification of the user
 * @returns {Promise<UserData>} - data of a user
 */

export function fetchUserData(userId) {
  const getUserData = instance.get(constants.userInfosPath(userId))
  return getUserData
}
/**
 * @typedef ActivityData 
 * @prop {number} userId
 */

/**
 *  This function realise a call API and get the user activity data
 * @param {number} userId - identification of the user
 * @returns {Promise<ActivityData>} - data of a user activity
 */
export function fetchActivityData(userId) {
  const getActivityData = instance.get(constants.userActivityPath(userId))
  return getActivityData
}
/**
 * @typedef AvgSesssionsData 
 * @prop {number} userId
 */

/**
 *  This function realise a call API and get the user averge sessions data
 * @param {number} userId - identification of the user
 * @returns {Promise<AvgSesssionsData>} - data of a user averge sessions
 */
export function fetchAvgSesssionsData(userId) {
  const getAvgSesssionsData = instance.get(constants.userAvgSesssionsPath(userId))
  return getAvgSesssionsData
}
/**
 * @typedef PerformanceData 
 * @prop {number} userId
 */

/**
 *  This function realise a call API and get the user performance data
 * @param {number} userId - identification of the user
 * @returns {Promise<PerformanceData>} - data of a user performance
 */
export function fetchPerformanceData(userId) {
  const getPerformanceData = instance.get(constants.userPerformancePath(userId))
  return getPerformanceData
}
