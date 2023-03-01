import React from "react";

function Product(props){
    return(
        <div className="col mt-4">
            <div className="p-3 product-cart text-center">
                <img src={props.image} alt="productImage" className="product-image mt-4"></img>
                <h4 className="product-name mt-3 fw-bold">{props.productName}</h4>
                <p className="product-info pt-3 text-secondary fs-5">
                {props.productInfo}
                </p>
            </div>
        </div>
    )
}
export default Product