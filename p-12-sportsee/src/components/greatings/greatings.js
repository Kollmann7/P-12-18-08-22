import React from "react";

function Greatings (props) {
    // const {firstName, lastName, age} = props
    console.log(props)
    return(
        <div className="greatings">
            <div className="userName">Bonjour {props.firstname}</div>
            <div className="userText">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
        </div>
        
    )
}

export default Greatings