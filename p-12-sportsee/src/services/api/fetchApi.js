import axios from 'axios'
import constants from '../../constants'

const instance = axios.create({
  baseURL: constants.baseUrl,
})
/**
 * @typedef UserData 
 * @prop {string} userId
 */

/**
 *  This function realise a call API and get the user data
 * @param {number} userId - identification of the user
 * @returns {Promise<UserData>} - data of user
 */

export function fetchUserData(userId) {
  const getUserData = instance.get(constants.userInfosPath(userId))
  return getUserData
}
/**
 * @typedef ActivityData 
 * @prop {string} userId
 */

/**
 *  This function realise a call API and get the user activity data
 * @param {number} userId - identification of the user
 * @returns {Promise<ActivityData>} - data of user activity
 */
export function fetchActivityData(userId) {
  const getActivityData = instance.get(constants.userActivityPath(userId))
  return getActivityData
}
/**
 * @typedef AvgSesssionsData 
 * @prop {string} userId
 */

/**
 *  This function realise a call API and get the user averge sessions data
 * @param {number} userId - identification of the user
 * @returns {Promise<AvgSesssionsData>} - data of user averge sessions
 */
export function fetchAvgSesssionsData(userId) {
  const getAvgSesssionsData = instance.get(constants.userAvgSesssionsPath(userId))
  return getAvgSesssionsData
}
/**
 * @typedef PerformanceData 
 * @prop {string} userId
 */

/**
 *  This function realise a call API and get the user performance data
 * @param {number} userId - identification of the user
 * @returns {Promise<PerformanceData>} - data of user performance
 */
export function fetchPerformanceData(userId) {
  const getPerformanceData = instance.get(constants.userPerformancePath(userId))
  return getPerformanceData
}
