const mockUrls = {
  baseUrl: process.env.REACT_APP_API_BASE_ULR,
  userInfosPath: (userId) => `user_${userId}.json`,
  userActivityPath: (userId) => `user_${userId}/activity.json`,
  userAvgSesssionsPath: (userId) => `user_${userId}/average-sessions.json`,
  userPerformancePath: (userId) => `user_${userId}/performance.json`,
}

const apiUrls = {
  baseUrl: process.env.REACT_APP_API_BASE_ULR,
  userInfosPath: (userId) => `user/${userId}`,
  userActivityPath: (userId) => `user/${userId}/activity`,
  userAvgSesssionsPath: (userId) => `user/${userId}/average-sessions`,
  userPerformancePath: (userId) => `user/${userId}/performance`,
}

console.log(process.env.REACT_APP_MODE)
export default process.env.REACT_APP_MODE === 'production' ? apiUrls : mockUrls