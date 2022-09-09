import React, { useState, useEffect } from 'react'
import {FetchApi} from '../../services/api/fetchApi'
import {useParams} from 'react-router-dom'
import Header from "../../components/header/header"
import SideBar from "../../components/sidebar/sidebar"
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
    
    console.log('data', FetchApi(userId))

    useEffect(() => {
        FetchApi(userId)
            .then((result) => {
                setUserData(result[0].data.data)
                setActivityData(result[1].data.data)
                setAvgSesssionsData(result[2].data.data)
                setPerformanceData(result[3].data.data)
            })
    }, [userId])

    
    // console.log('userData',userData)
    // console.log('activityData',activityData)
    // console.log('avgSesssionsData',avgSesssionsData)
    // console.log('performanceData',performanceData)
    return(
        <div>
            {userData && (
                <>
                    <Header/>
                    <main>
                        <div className='user-infos-wrapper'>
                            <Greatings firstname={userData.userInfos.firstName} />
                        <section className='user-wrapper'>
                            <article className='user-container'>
                            <UserActivity useractivity={activityData.sessions}/>
                            <div className='user-sessions-wrapper'>
                                <UserAgvSessions useragvsessions={avgSesssionsData}/>
                                <UserPerformance userperformance={performanceData} />
                                <TodayScore todayscore={userData.score}/>
                            </div>
                            </article>
                            <div className='user-nutrition-sum'>
                                <UserNutritionSum usernutritionsum={userData.keyData}/>
                            </div>
                        </section>
                        </div>
                    </main>
                    <SideBar/>
                </>
            )}
        </div>
    )
}

export default Dashboard