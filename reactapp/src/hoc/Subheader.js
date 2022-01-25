import React from "react";

export default function SubHeader(props) {
    return (
        <div className="subheading-container">
         <h2>{props.text}</h2> 
         <hr className="hr-subheading"/>
        </div>
    );
}