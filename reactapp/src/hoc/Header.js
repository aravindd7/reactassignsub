import React from "react";

export default function Header(props) {
    return (
        <div className="heading">
          {props.text}
        </div>
    );
}