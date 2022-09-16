import React, { useState, useEffect } from 'react'
import {
  FetchUserData,
  FetchActivityData,
  FetchAvgSesssionsData,
  FetchPerformanceData,
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

  useEffect(() => {
    FetchUserData(userId).then((result) => {
      setUserData(result.data.data)
    })
    FetchActivityData(userId).then((result) => {
      setActivityData(result.data.data)
    })
    FetchAvgSesssionsData(userId).then((result) => {
      console.log('res sess', result.data.sessions)
      setAvgSesssionsData(result.data.data)
    })
    FetchPerformanceData(userId).then((result) => {
      setPerformanceData(result.data.data)
    })
  }, [userId])

  return (
    <div>
      {userData && (
        <>
          <Header />
          <main>
            <div className="user-infos-wrapper">
              <Greatings firstname={userData.userInfos.firstName} />
              <section className="user-wrapper">
                <article className="user-container">
                  <UserActivity useractivity={activityData.sessions} />
                  <div className="user-sessions-wrapper">
                    <UserAgvSessions useragvsessions={avgSesssionsData} />
                    <UserPerformance userperformance={performanceData} />
                    <TodayScore todayscore={userData.todayScore} />
                  </div>
                </article>
                <div className="user-nutrition-sum">
                  <UserNutritionSum usernutritionsum={userData.keyData} />
                </div>
              </section>
            </div>
          </main>
          <SideBar />
        </>
      )}
    </div>
  )
}

export default Dashboard
