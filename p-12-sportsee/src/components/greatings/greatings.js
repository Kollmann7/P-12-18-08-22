import React from 'react'
import './greatings.css'
import PropTypes from 'prop-types'

function Greatings(props) {
  return (
    <div className="greatings">
      <div className="user-name">Bonjour {props.firstname}</div>
      <div className="user-text">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
    </div>
  )
}
Greatings.propTypes = {
  props: PropTypes.string.isRequired,
}
export default Greatings
