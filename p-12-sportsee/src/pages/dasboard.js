import React, { useState } from 'react'
import Header from "../components/header/header"
import SideBar from "../components/sidebar/sidebar"
import Greatings from '../components/greatings/greatings'
import {FetchApi} from '../services/api/fetchApi'
import {useParams} from 'react-router-dom'



function Dashboard() {
    const params = useParams()
    const userId = params.id
    
    const [userData, setUserData] = useState([])
    const [activityData, setActivityData] = useState([])
    const [avgSesssionsData, setAvgSesssionsData] = useState([])
    const [performanceData, setPerformanceData] = useState([])
    
    const result = FetchApi(userId)
    console.log('data', result)
    
    if (userData.length === 0){
        setUserData(result[0].data.data)
        setActivityData(result[1].data.data)
        setAvgSesssionsData(result[2].data.data)
        setPerformanceData(result[3].data.data)
    }
    console.log(userData)
    console.log(activityData)
    console.log(avgSesssionsData)
    console.log(performanceData)
    return(
        <div>
            {result && (
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