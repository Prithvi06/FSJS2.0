import React from "react";
import aboutImage from "./about.jpg"

function About(){
    return(
        <>
            <div className="home">
                <img src={aboutImage} alt="aboutimage"></img>
            </div>
        </>
    )
}

export default About