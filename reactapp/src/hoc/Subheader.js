import React from "react";

export default function SubHeader(props) {
    return (
        <div className="heading-container">
         <h2>{props.text}</h2> 
        </div>
    );
}