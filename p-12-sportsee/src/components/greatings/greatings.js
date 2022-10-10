import React from 'react'
import './greatings.css'
import PropTypes from 'prop-types'

/**
 * @typedef GreatingsProps
 * @prop {string} firstname - The string will be use for the welcome message with his name
 */

/**
  * This function display the user name
  * @param {GreatingsProps} props - The string will show the user name
  * @return {ReactElement}
  */
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
