const mockUrls = {
  baseUrl: '/mock/',
  userInfosPath: (userId) => `user_${userId}.json`,
  userActivityPath: (userId) => `user_${userId}/activity.json`,
  userAvgSesssionsPath: (userId) => `user_${userId}/average-sessions.json`,
  userPerformancePath: (userId) => `user_${userId}/performance.json`,
}

const apiUrls = {
  baseUrl: 'http://localhost:3001/user/',
  userInfosPath: (userId) => `${userId}`,
  userActivityPath: (userId) => `${userId}/activity`,
  userAvgSesssionsPath: (userId) => `${userId}/average-sessions`,
  userPerformancePath: (userId) => `${userId}/performance`,
}

export default process.env.mode === 'production' ? apiUrls : mockUrls
