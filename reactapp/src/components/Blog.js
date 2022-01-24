import React from "react";
import Header from "../hoc/Header";
import SubHeader from "../hoc/Subheader";
import BlogContent from "./content/BlogContent";
import FooterOther from "./content/FooterOther";
export default function Blog () {
    return (
     <div>
         <div>
             <Header text="Blog List"/>
             <SubHeader text="Why Shop with Us?" />
         </div>
         <div className="container-blog">
             <BlogContent />
         </div>
         <FooterOther />
     </div>
    );
}