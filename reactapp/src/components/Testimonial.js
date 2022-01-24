import React from "react";
import Header from "../hoc/Header";
import SubHeader from "../hoc/Subheader";
import FooterOther from './content/FooterOther';

export default function Testimonial () {
    return (
    <div>
        <Header text="Testimonial"/>
        <SubHeader text="Customer's Testimonial"/>
        <FooterOther />
    </div>
    );
}