import React from "react";

export default function Header(props) {
    return (
        <div className="heading-container">
          {props.text}
        </div>
    );
}