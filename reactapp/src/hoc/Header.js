import React from "react";

export default function Header(props) {
    return (
        <div className="heading-container">
          <h3>{props.text}</h3>
        </div>
    );
}