import React from "react";

function Fame({fame}){
    return(
        <div className="col-lg-4 mt-4">
            <div className="p-3 fame-cart rounded-4 shadow">
                <img src={fame} alt="fameImage" className="fame-image mt-4"></img>
                <h5 className="fame-name mt-3">Prithviraj Singh Thakur</h5>
                <p className="fame-position fw-semibold text-secondary">iNeuron, FullStack WebDeveloper Aspirant</p>
                <p className="fame-feed pt-3">Hi All, I am a student of the NOV 2022 batch, 
                I made a good decision by joining the Ineuron classes. 
                A very big thank you</p>
                <div className="pb-4">
                    <i className="fa-brands fa-linkedin fa-2x"></i>
                </div>
            </div>
        </div>
    )
}
export default Fame