import React, { useState, useEffect } from 'react'
import {FetchApi} from '../../services/api/fetchApi'
import {useParams} from 'react-router-dom'
import Header from "../../components/header/header"
import SideBar from "../../components/sidebar/sidebar"
import Greatings from '../../components/greatings/greatings'
import UserActivity from '../../components/userActivity/userActivity'
import UserAgvSessions from '../../components/userAvgSessions/userAvgSessions'
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
            .then((reponse) => reponse)
            .then((result) => {
                setUserData(result[0].data.data)
                setActivityData(result[1].data.data)
                setAvgSesssionsData(result[2].data.data)
                setPerformanceData(result[3].data.data)
            })
    }, [userId])

    
    // console.log('userData',userData)
    console.log('activityData',activityData)
    console.log('avgSesssionsData',avgSesssionsData)
    console.log('performanceData',performanceData)
    return(
        <div>
            {userData && (
                <>
                    <Header/>
                    <main>
                        <div className='user-wrapper'>
                            <Greatings firstname={userData.userInfos.firstName} />
                            <UserActivity useractivity={activityData.sessions}/>
                            <div className='user-sessions-wrapper'>
                                <UserAgvSessions useragvsessions={avgSesssionsData}/>
                            </div>

                        </div>
                    </main>
                    <SideBar/>
                </>
            )}
        </div>
    )
}

export default Dashboard