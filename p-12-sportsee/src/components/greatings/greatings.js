import React from "react";
import './greatings.css'

function Greatings (props) {
    
    return(
        <div className="greatings">
            <div className="user-name">Bonjour {props.firstname}</div>
            <div className="user-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
        </div>
        
    )
}

export default Greatings