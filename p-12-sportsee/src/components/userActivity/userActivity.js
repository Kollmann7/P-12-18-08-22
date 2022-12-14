import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
import './userActivity.css'
import PropTypes from 'prop-types'

/**
  * @param {number} date
  * @return {number} - new date with british numerical format 
  */
const formatDate = (date) => {
  const dateTimeFormat = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
  }).format(new Date(date))
  return dateTimeFormat
}

/**
 * @typedef UserActivityProps
 * @prop {array} useractivity - this array gives us the kilograms and the calories for each day 
 */

/**
  * This function will display the activity of the user  
  * @param {UserActivityProps} props - this array gives us the kilograms and the calories for each day 
  * @return {ReactElement}
  */
function UserActivity(props) {
  return (
    <div className="user-activity-container">
      <div className="user-activity-wrapper">
        <div className="user-activity-title">Activité quotidienne</div>
        <div className="user-activity-legend">
          <div className="weight">
            <span className="black-dot">•</span> Poids (kg)
          </div>
          <div className="calories">
            <span className="red-dot">•</span> Calories brûlées (kCal)
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart barGap={5} width="100%" data={props.useractivity}>
          <XAxis dataKey="day" tickFormatter={formatDate} strokeDasharray="0" />

          <YAxis
            yAxisId="poids"
            orientation="right"
            type="number"
            axisLine={false}
            tickLine={false}
            tickCount={3}
            domain={['dataMin -1', 'auto']}
          />
          <YAxis
            yAxisId="calories"
            axisLine={false}
            tickLine={false}
            tick={false}
          />
          <CartesianGrid
            stroke="#DEDEDE"
            strokeDasharray="3"
            vertical={false}
          />
          <Tooltip content={<CustomToolTip />} />
          <Bar
            yAxisId="calories"
            name="kCal"
            dataKey="calories"
            fill="#282D30"
            barSize={8}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="poids"
            name="kg"
            dataKey="kilogram"
            fill="#E60000"
            barSize={8}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

UserActivity.propTypes = {
  useractivity: PropTypes.array.isRequired,
}

/**
  * @param {boolean} active
  * @param {array} payload
  */
function CustomToolTip({ active, payload }) {
  if (active) {
    return (
      <div className="custom-tool-tip-activity">
        <p>{`${payload[1].value} Kg`}</p>
        <p>{`${payload[0].value} kCal`}</p>
      </div>
    )
  }
  return null
}

export default UserActivity
