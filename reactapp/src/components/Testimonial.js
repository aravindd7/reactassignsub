import React from "react";
import Header from "../hoc/Header";
import SubHeader from "../hoc/Subheader";
import FooterOther from './content/FooterOther';
import TestimonialContent from './content/TestimonialContent';
export default function Testimonial () {
    return (
    <div className="container-root">
        <Header text="Testimonial"/>
        <TestimonialContent />
        <FooterOther />
    </div>
    );
}