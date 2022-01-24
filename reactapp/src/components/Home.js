import React from "react";
import LandingContent from "./content/LandingContent";
import SubHeader from "../hoc/Subheader";
import AboutContent from './content/AboutContent';
import BlogContent from "./content/BlogContent";
import SubscribeContent from "./content/SubscribeContent";
import TestimonialContent from "./content/TestimonialContent";
import FooterContent from "./content/FooterContent";


export default function Home () {
    return (
     <div>
         <LandingContent />
         <SubHeader text="Why Shop With Us?" />
         <BlogContent />
         <AboutContent />
         <SubscribeContent />
         <TestimonialContent />
         <FooterContent />
     </div>
    );
}