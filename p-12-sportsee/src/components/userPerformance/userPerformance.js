import React from "react"
import {RadarChart,PolarGrid,ResponsiveContainer,PolarAngleAxis,Radar,} from 'recharts'
import './userPerformance.css'

function UserPerformance (props) {

    const formatKind = kind => {
        const kindFormat = ['Intensité','Vitesse','Force','Endurance','Energie','Cardio']
        if (kind) return kindFormat[kind - 1]
    }
    
    return(
        <div className='user-performance'>
            <ResponsiveContainer width="100%" height={263}>
            <RadarChart
            cy="50%"
            cx="50%"
            outerRadius="70%"
            data={props.userperformance.data}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
                dataKey="kind"
                tickFormatter={formatKind}
                stroke="#fff"
                tickLine={false}
                style={{fontSize: '12px', fontWeight: '500'}}
            />
            <Radar
                name="Performance"
                dataKey="value"
                fill="#FF0000"
                fillOpacity={0.8}
            />
            </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserPerformance