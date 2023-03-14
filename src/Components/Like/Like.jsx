import React, { useState } from 'react';
import "./Like.css"

const Like = (props) => {
    const [buttonClass, setButtonClass]= useState('inactive-like')

    function handleClick(){
        if(buttonClass === "inactive-like"){
            setButtonClass("active-like");
        }
        else {
            setButtonClass("inactive-like");
        }
    }
    return (
        <div>
            <button className={buttonClass} onClick={handleClick}style={{float:"right"}}>Like</button>
        </div>
    )
}
export default Like 