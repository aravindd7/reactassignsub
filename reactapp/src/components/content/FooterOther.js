import React from "react";
import { GoLocation } from "react-icons/go";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

export default function FooterOther() {
    return (
        <div className="container-row footer-other">
            <div>
                <p>Reach at...</p>
                <p><GoLocation /> Location</p>
                <p><IoCall /> +01 1234567890</p>
                <p><AiOutlineMail />demo@gmail.com</p>
            </div>
            <div>
                <p>Famms</p>
                <p>Necessary, making this the
                 first true<br /> generator on the Internet.
                  It uses a<br />  dictionary of over 200 Latin words, <br /> 
                  combined with</p>
                <div className="container-row">
                    <BsFacebook />
                    <AiFillTwitterCircle />
                    <TiSocialLinkedinCircular />
                    <BsInstagram />
                    <BsPinterest />
                </div>
                <div>
                <hr></hr>
                <p>© 2022 All Rights Reserved By Free Html Templates</p>
               </div>
            </div>
        </div>
    );
}