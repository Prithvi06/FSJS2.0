import React from "react";
import Pwlogo from "../assets/PWSkills-white.png"
import Iso from "../assets/iso.svg"

function Footer(){
    return(
        <>
            <div className="bg-dark">
                <div className="container footer">
                <div className="row">
                    <div className="col-lg-3 mt-3">
                        <img src={Pwlogo} alt="pwLogo" className="w-50"></img>
                        <p className="text-white mt-4">
                            <i className="ps-3 fa-solid fa-envelope"></i>
                            <b className="ps-4">Email us: </b>support@pwskills.com
                        </p>
                        <p className="text-white d-flex column-gap-3 mt-5 ps-3">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-telegram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-discord"></i>
                        </p>
                        <img src={Iso} alt="isoImage" className="mt-5 w-25"></img>
                    </div>
                    <div className="offset-lg-1 col-lg-5 text-white mt-3">
                        <h3 className="mt-3">PW Skills</h3>
                        <hr className="w-50 border-3 line"></hr>
                        <div className="d-flex pt-4">
                            <p className="w-50">About us</p>
                            <p>Contact us</p>
                        </div>
                        <div className="d-flex ">
                            <p className="w-50">FAQs</p>
                            <p>Job assistance</p>
                        </div>
                        <div className="d-flex ">
                            <p className="w-50">Privacy policy</p>
                            <p>Terms and conditions</p>
                        </div>
                    </div>
                    <div className="col-lg-3 text-white mt-3">
                        <h3 className="mt-3">Products</h3>
                        <hr className="w-50 border-3 line"></hr>
                        <ul className="list-unstyled pt-4">
                            <li>PW Skills Lab</li>
                            <li  className="pt-2 pb-1">Job Portal</li>
                            <li className="py-1">Experience portal</li>
                            <li className="py-1">Become an affiliate</li>
                            <li className="py-1">Hall of fame</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer