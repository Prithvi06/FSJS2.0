import React from "react";
import homeImage from "./home.jpg"
function Home(){
    return(
        <>
            <div className="home">
                <img src={homeImage} alt="homeimage"></img>
            </div>
        </>
    )
}

export default Home