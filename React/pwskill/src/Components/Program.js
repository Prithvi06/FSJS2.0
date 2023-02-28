import React from "react";
import ProgramCart from './ProgramCart'

function Program(props){
    return(
        <>
            <div className="row">
                <div className="col text-center">
                    <h1 className="program-heading">{props.programHeading}</h1>
                    <p className="program-dailog text-secondary fs-5">{props.programDialog}</p>
                </div>
            </div>
            <div className="row mt-5 gx-5">
                <ProgramCart image={props.Image} courseName={"Full Stack web development"}
                 mentor={"Hitesh Choudhary"} price={"2975"}/>
                 <ProgramCart image={props.Image} courseName={"Full Stack web development"}
                 mentor={"Hitesh Choudhary"} price={"2975"}/>
                 <ProgramCart image={props.Image} courseName={"Full Stack web development"}
                 mentor={"Hitesh Choudhary"} price={"2975"}/>
            </div>
        </>
    )
}

export default Program