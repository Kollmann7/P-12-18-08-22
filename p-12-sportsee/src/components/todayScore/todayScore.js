import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import './todayScore.css'
import PropTypes from 'prop-types'


/**
 * @typedef TodayScoreProps
 * @prop {number} todayscore - It's the today score of the user
 */

/**
  * This function will display the day score of the user 
  * @param {TodayScoreProps} props - 
  * @return {ReactElement}
  */
function TodayScore(props) {
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
    <ResponsiveContainer className="user-today-score">
      <PieChart width={258} height={263}>
        <svg>
          <text x="30" y="40" fontSize={15} fill="#20253A">
            Score
          </text>
        </svg>
        <Pie
          data={scoreDataModified}
          dataKey="value"
          fill="#FF0000"
          innerRadius={75}
          outerRadius={'68%'}
          startAngle={90}
          endAngle={360}
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
          <circle cx="138" cy="138" r="80" fill="#ffffff" />
          <text x="105" y="125" fontSize={26} fontWeight="bold" fill="#20253A">
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

TodayScore.propTypes = {
  todayscore: PropTypes.number.isRequired,
}
export default TodayScore
