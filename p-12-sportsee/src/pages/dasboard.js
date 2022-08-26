import React, { useState, useEffect } from 'react'
import Header from "../components/header/header"
import SideBar from "../components/sidebar/sidebar"
import Greatings from '../components/greatings/greatings'
import {FetchApi} from '../services/api/fetchApi'
import {useParams} from 'react-router-dom'



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

    
    console.log(userData)
    console.log(activityData)
    console.log(avgSesssionsData)
    console.log(performanceData)
    return(
        <div>
            {userData && (
                <>
                    <Header/>
                        <Greatings firstname={userData.userInfos.firstName} />
                    <SideBar/>
                </>
            )}
        </div>
    )
}

export default Dashboard