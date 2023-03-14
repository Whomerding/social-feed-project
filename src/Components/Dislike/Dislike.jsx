import React, { useState } from 'react';
import { PageItem } from 'react-bootstrap';
import "./Dislike.css"

const Dislike = (props) => {
    const [buttonClassDislike, setButtonClassDislike]= useState('inactive-dislike')

    function handleClick(){
        if(buttonClassDislike === "inactive-dislike"){
            setButtonClassDislike("active-dislike");
        }
        else {
            setButtonClassDislike("inactive-dislike");
        }
    }
    return (
        <div>
            <button className={buttonClassDislike} onClick={handleClick} style={{float:"right"}}>Dislike</button>
        </div>
    )
}
export default Dislike 