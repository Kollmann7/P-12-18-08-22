import React, { useState, useEffect } from 'react'
import {
  fetchUserData,
  fetchActivityData,
  fetchAvgSesssionsData,
  fetchPerformanceData,
} from '../../services/api/fetchApi'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/header'
import SideBar from '../../components/sidebar/sidebar'
import Greatings from '../../components/greatings/greatings'
import UserActivity from '../../components/userActivity/userActivity'
import UserAgvSessions from '../../components/userAvgSessions/userAvgSessions'
import UserPerformance from '../../components/userPerformance/userPerformance'
import TodayScore from '../../components/todayScore/todayScore'
import UserNutritionSum from '../../components/userNutritionSum/userNutritionSum'
import './dashboard.css'

function Dashboard() {
  const params = useParams()
  const userId = params.id

  const [userData, setUserData] = useState(null)
  const [activityData, setActivityData] = useState(null)
  const [avgSesssionsData, setAvgSesssionsData] = useState(null)
  const [performanceData, setPerformanceData] = useState(null)
  const [errors, setErrors] = useState(null);
  

  useEffect(() => {
    Promise.all([
      fetchUserData(userId),
      fetchActivityData(userId),
      fetchAvgSesssionsData(userId),
      fetchPerformanceData(userId)
    ]).then((result)=> {
      const [userDataResult, activityDataResult, avgSesssionsDataResult, performanceDataResult] = result
      setUserData(userDataResult.data.data)
      setActivityData(activityDataResult.data.data)
      setAvgSesssionsData(avgSesssionsDataResult.data.data)
      setPerformanceData(performanceDataResult.data.data)
    }).catch(error => {
      console.log(error.message)
      setErrors('Could not fetch the data')
    })
    
  }, [userId])

  return (
    <>
      {errors && <div className='error'> {errors} </div>}
      {userData && (
        <>
          <Header />
            <div className="user-infos-wrapper">
              <Greatings firstname={userData.userInfos.firstName} />
              <section className="user-wrapper">
                <article className="user-container">
                  <UserActivity useractivity={activityData.sessions} />
                  <div className="user-sessions-wrapper">
                    <UserAgvSessions useragvsessions={avgSesssionsData.sessions} />
                    <UserPerformance userperformance={performanceData.data} />
                    <TodayScore todayscore={userData.todayScore ?? userData.score} />
                  </div>
                </article>
                <div className="user-nutrition-sum">
                  <UserNutritionSum usernutritionsum={userData.keyData} />
                </div>
              </section>
            </div>
          <SideBar />
        </>
      )}
    </>
  )
}

export default Dashboard