import React from 'react'
import {
  RadarChart,
  PolarGrid,
  ResponsiveContainer,
  PolarAngleAxis,
  Radar,
} from 'recharts'
import './userPerformance.css'
import PropTypes from 'prop-types'

/**
 * @typedef UserPerformance
 * @prop {array} userperformance - This array give us the performance of the user 
 */

/**
  * This function will display the performance of the user 
  * @param {UserPerformance} props - This array give us the kind and value
  * @return {ReactElement}
  */
function UserPerformance(props) {
  /**
  * @param {string} kind
  * @return {string} the kind of performance in french
  */
  const formatKind = (kind) => {
    const kindFormat = [
      'Intensité',
      'Vitesse',
      'Force',
      'Endurance',
      'Energie',
      'Cardio',
    ]
    if (kind) return kindFormat[kind - 1]
  }

  return (
    <div className="user-performance">
      <ResponsiveContainer width="100%" height={263}>
        <RadarChart
          cy="50%"
          cx="50%"
          outerRadius="70%"
          data={props.userperformance}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={formatKind}
            stroke="#fff"
            tickLine={false}
            style={{ fontSize: '12px', fontWeight: '500' }}
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
UserPerformance.propTypes = {
    userperformance: PropTypes.array.isRequired,
}
export default UserPerformance
