import React, { useState,useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import {addItemToCart, removeItemFromCart} from "./helper/cartHelper"

const Card = ({product,
  AddToCart = true,
  RemoveFromCart=false,
   setReload = f => f ,
   //fuction(f){return f}
    reload = undefined}) => {

  const [redirect , setRedirect] = useState(false);
  const [count , setCount] = useState(product.count);

  const cartTitle = product ? product.name : "A photo from pexel"
  const cartdescription = product ? product.description : "Default description"
  const cartprice = product ? product.price: "DEFAULT"

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = (redirect) => {
    if(redirect){
      return <Redirect to = "/cart" />
    }
  };

    const showAddToCart = (AddToCart) =>{
        return(
             AddToCart && (
            <button
                onClick={addToCart}
                className="btn btn-block btn-outline-success mt-2 mb-2"
              >
                Add to Cart
              </button>)
            )
        }

        const showRemoveFromCart = (RemoveFromCart)=>{
            return(
                RemoveFromCart && (
                    <button
                onClick={() => {
                  removeItemFromCart(product._id);
                  setReload(!reload)
                }
                }
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
                )
            )
        }
    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cartTitle}</div>
        <div className="card-body">
          {getARedirect(redirect)}
          <ImageHelper product = {product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartdescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$ {cartprice}</p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(AddToCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(RemoveFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Card;