import React from "react";
import logo from "../PWSkills-logo.png"
import Navbar from './Navbar'

function Header(){
    return(
        <>
        <div className="container">
            <div className="row align-items-center mt-3">
                <div className="col-2">
                    <img src={logo} alt="logo" className="logo-image"></img>
                </div>
                <div className="col-8">
                    <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="What do you want to learn?" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                </div>
                <div className="col-2">
                <button type="button" className="btn-login">Login/Register</button>
                </div>
            </div>
            <Navbar/>
        </div>
        </>
    )
}
export default Header