// import React from "react";
import "./triprops.css";
// import { IoIosMore } from "react-icons/io";

const Trip = (props) => {
  return (
    <>
      <div className="Props new">
        <div className="beach-div">
          <img src={props.image} alt="" />
          <div className="dark-comment">

            <div className="rate">
              <div className="divRate">
                <img src={props.rating} alt="" />
              </div>
              <h5 style={{
                color: "rgba(206, 205, 205, 0.644)"
              }}>${props.price}</h5>
            </div>
            <h5>{props.destination}</h5>
           <h3>{props.name}</h3>
              <p>{props.description} 
                {/* <IoIosMore className="icon" onClick={props.function} /> */}
                </p>
              
              <div className="comment-div">
              <p>{props.activities}</p>
              <h4>{props.Popularity}</h4>
            </div>
            </div>
            
          </div>
          <div>
        </div>
      </div>
    </>
  );
};

export default Trip;
