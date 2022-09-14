import React from "react"
import {ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import './todayScore.css'



function TodayScore (props) {
    const scoreDataModified = [
        {
          name: 'completed',
          value: props.todayscore * 100,
        },
        {
          name: 'remain',
          value: 100 - props.todayscore * 100,
        },
      ]
    
      return (
        <ResponsiveContainer className="score">
          <PieChart width={258} height={263}>
            <svg>
              <text x="30" y="40" fontSize={15} fill="#20253a">
                Score
              </text>
            </svg>
            <Pie
              data={scoreDataModified}
              dataKey="value"
              fill="#FF0000"
              innerRadius={68}
              outerRadius={80}
              startAngle={80}
              endAngle={480}
            >
              {scoreDataModified.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 0 ? '#FF0000' : 'none'}
                  cornerRadius="40%"
                />
              ))}
            </Pie>
            <svg>
              <circle cx="130" cy="133" r="70" fill="#ffffff" />
              <text x="105" y="125" fontSize={26} fontWeight="bold" fill="#282d30">
                {props.todayscore * 100}%
              </text>
              <text fontSize={16} width="20px" fill="#74798c">
                <tspan x="100" y="150">
                  de votre
                </tspan>
                <tspan x="100" y="175">
                  objectif
                </tspan>
              </text>
            </svg>
          </PieChart>
        </ResponsiveContainer>
      )
}


export default TodayScore