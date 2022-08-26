import React from "react"
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import './userAvgSessions.css'
    
const formatDay = day => {
    const dayFormat = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    if (day) return dayFormat[day - 1]
}

function UserAgvSessions (props) {
    return(
        <div className="user-agv-sessions">
            <div className='user-avg-title'>Durée moyenne des sessions</div>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart
                data={props.useragvsessions.sessions}
                margin={{top: 0, right: 0, bottom: 0, left: -54}}>
                <XAxis
                    axisLine={false}
                    tickLine={false}
                    dataKey="day"
                    tickFormatter={formatDay}
                    stroke="#fff"
                    style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    opacity: '0.8',
                    }}
                />
                <YAxis
                    dataKey="sessionLength"
                    axisLine={false}
                    tick={false}
                    domain={['dataMin -2', 'dataMax + 20']}
                />
                <Tooltip
                    content={<CustomTooltip />}
                    cursor={{
                    stroke: '#000',
                    strokeOpacity: 0.1,
                    strokeWidth: '45',
                    }}
                />
                <CartesianGrid
                    strokeDasharray="0"
                    horizontal={false}
                    vertical={false}
                />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="#fff"
                    strokeWidth={2}
                    dot={false}
                    style={{
                    opacity: '0.7',
                    }}
                    activeDot={{r: 3, strokeWidth: 9, strokeOpacity: 0.3}}
                />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )

}
function CustomTooltip  ({active, payload})  {
    if (active && payload) {
      return (
        <div className="custom-tool-tip-avg">
            {`${payload[0].value} min`}
        </div>
      )
    }
    return null;
  };

export default UserAgvSessions