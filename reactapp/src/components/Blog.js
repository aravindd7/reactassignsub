import React from "react";
import Header from "../hoc/Header";
import SubHeader from "../hoc/Subheader";

export default function Blog () {
    return (
     <div>
         <div>
             <Header text="Blog List"/>
             <SubHeader text="Why Shop with Us?" />
         </div>
         <div className="container--blog">
             <div className="container--row">
                 <div className="card--blog">
                     <p>Fast Delivery</p>
                     <p>Variations of passages of Lorem ipsum available</p>
                 </div>
                 <div className="card--blog">
                     <p>Free Shipping</p>
                     <p>Variations of passages of Lorem ipsum available</p>
                 </div>
                 <div className="card--blog">
                     <p>Best Quality</p>
                     <p>Variations of passages of Lorem ipsum available</p>
                 </div>
             </div>
         </div>
     </div>
    );
}