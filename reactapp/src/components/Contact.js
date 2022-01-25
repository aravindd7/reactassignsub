import React from "react";
import Header from "../hoc/Header";
import ContactContent from "./content/ContactContent";
import FooterOther from './content/FooterOther';
import AboutContent from "./content/AboutContent";

export default function Contact () {
    return (
      <div className="container-root">
      <Header text="Contact Us" />
      <ContactContent />
      <AboutContent />
      <FooterOther />
      </div>
    );
}