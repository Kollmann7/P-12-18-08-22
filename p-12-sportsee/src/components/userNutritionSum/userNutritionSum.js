import React from 'react'
import Calories from '../../assets/calories-icon.svg'
import Carbs from '../../assets/carbs-icon.svg'
import Fat from '../../assets/fat-icon.svg'
import Protein from '../../assets/protein-icon.svg'
import './userNutritionSum.css'
import PropTypes from 'prop-types'


function UserNutritionSum(props) {
  return (
    <div className="nutrition-container">
      <div className="container">
        <img src={Calories} className="container-img" alt="Calories" />
        <div className="container-infos">
          <span>
            <strong>{props.usernutritionsum.calorieCount} kCal</strong>
          </span>
          <span>Calories</span>
        </div>
      </div>
      <div className="container">
        <img src={Protein} className="container-img" alt="Carbs" />
        <div className="container-infos">
          <span>
            <strong>{props.usernutritionsum.carbohydrateCount} g</strong>
          </span>
          <span>Proteines</span>
        </div>
      </div>
      <div className="container">
        <img src={Carbs} className="container-img" alt="Fat" />
        <div className="container-infos">
          <span>
            <strong>{props.usernutritionsum.lipidCount} g</strong>
          </span>
          <span>Glucides</span>
        </div>
      </div>
      <div className="container">
        <img src={Fat} className="container-img" alt="Protein" />
        <div className="container-infos">
          <span>
            <strong>{props.usernutritionsum.proteinCount} g</strong>
          </span>
          <span>Lipides</span>
        </div>
      </div>
    </div>
  )
}

UserNutritionSum.propTypes = {
  usernutritionsum: PropTypes.object.isRequired,
}

export default UserNutritionSum
