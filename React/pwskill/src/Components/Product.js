import React from "react";

function Product(props){
    console.log(props)
    return(
        <div className="col-lg-4 mt-4">
            <div className="p-3 product-cart text-center">
                <img src={props.image} alt="productImage" className="product-image mt-4"></img>
                <h5 className="product-name mt-3">{props.productName}</h5>
                <p className="product-info pt-3">
                {props.productInfo}
                </p>
            </div>
        </div>
    )
}
export default Product