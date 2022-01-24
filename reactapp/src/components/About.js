import React from "react";
import Header from "../hoc/Header";
import SubHeader from "../hoc/Subheader";
import AboutContent from "./content/AboutContent";
import BlogContent from "./content/BlogContent";
import FooterOther from "./content/FooterOther";
export default function About () {
    return (
     <div>
         <div>
             <Header text="About Us"/>
             <SubHeader text="Why Shop with Us?" />
         </div>
         <BlogContent />
         <AboutContent />
         <FooterOther />
     </div>
    );
}