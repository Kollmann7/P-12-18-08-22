import React from "react";
import './greatings.css'

function Greatings (props) {
    console.log(process.env)
    return(
        <div className="greatings">
            <div className="user-name">Bonjour {props.firstname}</div>
            <div className="user-text">Félicitation ! Vous avez explosé  {process.env.REACT_APP_BIDULE} vos objectifs hier 👏</div>
        </div>
        
    )
}

export default Greatings