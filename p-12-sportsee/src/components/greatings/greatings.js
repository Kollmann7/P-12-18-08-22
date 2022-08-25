import React from "react";

function Greatings (props) {
    // const {firstName, lastName, age} = props
    console.log(props.userInfos)
    return(
        <div className="greatings">
            <div className="userName">Bonjour {props.firstName}</div>
            <div className="userText">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
        </div>
        
    )
}

export default Greatings