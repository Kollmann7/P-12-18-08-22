import React from 'react'
import './greatings.css'
import PropTypes from 'prop-types'

function Greatings(props) {
  return (
    <div className="greatings">
      <div className="user-name">Bonjour <span className='firstname'>{props.firstname}</span></div>
      <div className="user-text">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
    </div>
  )
}
Greatings.propTypes = {
  firstname: PropTypes.string.isRequired,
}
export default Greatings
