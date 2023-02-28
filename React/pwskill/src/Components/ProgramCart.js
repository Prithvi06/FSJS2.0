import React from "react";

function ProgramCart(props){
    console.log(props)
    return(
        <div className="col-lg-4 mt-4">
            <div className="p-4 rounded-4 shadow">
                <img src={props.image} alt="programimage" className="programcart-image"></img>
                <h5 className="course-heading mt-3 fs-4">{props.courseName}</h5>
                <p className="fw-semibold .text-body-secondary mt-5 fs-6">
                    {props.mentor}
                </p>
                <p className="fw-bold"><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i> {props.price}</p>
            </div>
        </div>
    )
}
export default ProgramCart