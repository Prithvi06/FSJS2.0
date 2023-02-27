import React from "react";
import home from '../home.jpg'
import books from '../books-icon.svg'
import credit from '../credit-card-icon.svg'
import student from '../student-icon.svg'
import shubhkey from '../shubhkey.png'
import wissen from '../wissen.png'
import zensar from '../zensar.png'


function Main(){
    return(
        <>
        <main>
            <section className="home">
                <img src={home} alt="home" className="home-image"></img>
            </section>

            <section className="container my-5 main-info">
                <div className="row">
                    <div className="col text-center">
                    <h1 className="hardwork-heading">"Pure Hardwork, No Shortcuts!"</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 text-center cart">
                        <img src={books} alt="books" className="cart-image"></img>
                        <p className="cart-info">600+</p>
                        <p className="cart-para">Different Courses</p>
                    </div>
                    <div className="col-lg-4 text-center cart">
                        <img src={student} alt="student" className="cart-image"></img>
                        <p className="cart-info">700000+</p>
                        <p className="cart-para">Student Enrolled</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src={credit} alt="credit" className="cart-image"></img>
                        <p className="cart-info">10000+</p>
                        <p className="cart-para">Successful Transition</p>
                    </div>
                </div>
            </section>

            <section className="our-achiever">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="achiever-heading">Our Achiever's Work with</h1>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-xl-2 col-md-4 col-sm-6">
                        <img src={shubhkey} alt="shubhkey" className="achiever-img" />
                    </div>
                    <div className="col-xl-2 col-md-4 col-sm-6">
                        <img src={wissen}  alt="wissen" className="achiever-img"  />
                    </div>
                    <div className="col-xl-2  col-md-4 col-sm-6">
                        <img src={zensar} alt="zensar" className="achiever-img" />
                    </div>
                    <div className="col-xl-2 col-md-4 col-sm-6">
                        <img src={shubhkey} alt="shubhkey" className="achiever-img"  />
                    </div>
                    <div className="col-xl-2  col-md-4 col-sm-6">
                        <img src={wissen} alt="wissen" className="achiever-img"  />
                    </div>
                    <div className="col-xl-2 col-md-4 col-sm-6">
                        <img src={zensar} alt="zensar" className="achiever-img" />
                    </div>
                </div>
            </div>
            </section>
        </main>
        </>
    )
}
export default Main