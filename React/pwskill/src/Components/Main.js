import React from "react";
import home from '../home.jpg'
import books from '../books-icon.svg'
import credit from '../credit-card-icon.svg'
import student from '../student-icon.svg'
import shubhkey from '../shubhkey.png'
import wissen from '../wissen.png'
import informatica from '../informatica.png'
import fame from '../fame.jpg'
import Fame  from "./Fame";
import Program from "./Program"
import popularImage from '../popular.jpg'
import affordableImage from '../affordable.jpg'
import communityImage from '../community.jpg'
import neurolab from '../neurolab-icon.svg'
import jobportal from '../jobPortal-icon.svg'
import internship from '../Internship-icon.svg'
// import affiliate from '../affilitatePortal-icon.svg'
// import halloffame from '../halloffame-icon.svg'
import Product from './Product'


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
                    <div className="col-xl-2 col-md-4 col-sm-6 mt-2">
                        <img src={shubhkey} alt="shubhkey" className="achiever-img" />
                    </div>
                    <div className="col-xl-2 col-md-4 col-sm-6 mt-2">
                        <img src={wissen}  alt="wissen" className="achiever-img"  />
                    </div>
                    <div className="col-xl-2  col-md-4 col-sm-6 mt-2">
                        <img src={informatica} alt="informatica" className="achiever-img" />
                    </div>
                    <div className="col-xl-2 col-md-4 col-sm-6 mt-2">
                        <img src={shubhkey} alt="shubhkey" className="achiever-img"  />
                    </div>
                    <div className="col-xl-2  col-md-4 col-sm-6 mt-2">
                        <img src={wissen} alt="wissen" className="achiever-img"  />
                    </div>
                    <div className="col-xl-2 col-md-4 col-sm-6 mt-2">
                        <img src={informatica} alt="informatica" className="achiever-img" />
                    </div>
                </div>
            </div>
            </section>

            <section className="hall-of-fame">
                <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="fame-heading">Hall Of fame</h1>
                    </div>
                </div>
                <div className="row text-center gx-5">
                    <Fame fame={fame}/>
                    <Fame fame={fame}/>
                    <Fame fame={fame}/>
                </div>
                </div>=
            </section>

            <section className="program">
                <div className="container">
                    <Program Image={popularImage} programHeading={'Popular Programs'} programDialog="Most in demand and watched by people." />
                </div>
            </section>

            <section className="program">
                <div className="container">
                    <Program Image={affordableImage} programHeading={'Affordable Programs'} programDialog="Find your favourite courses in pocket-friendly ways." />
                </div>
            </section>

            <section className="program">
                <div className="container">
                    <Program Image={communityImage}  programHeading={'Community Programs'} programDialog="Open to all pro-live classes on Youtube for free." />
                </div>
            </section>

            <section className="product-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center product-heading fw-bold">Our Products</h1>
                        </div>
                    </div>
                    <div className="row">
                        <Product image={neurolab} productName={"PW Skill Lab"}
                        productInfo={"Supercharge your project development with our robust lab."}/>
                        <Product image={jobportal} productName={"Job Portal"}
                            productInfo={"Use exceptional templates for a stand-out resume minus the sign up process."}
                        />
                        <Product image={internship} productName={"Experience Portal"}
                            productInfo={"PW Skills's self-paced experience portal prioritises hands-on training with 570+ internship projects."}
                        />
                    </div>
                    <div className="row">

                    </div>
                </div>
            </section>
        </main>
        </>
    )
}
export default Main