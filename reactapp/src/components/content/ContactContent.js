import React from "react";

export default function ContactContent() {
    return (
        <div className="container-contact">
            <form className="container-column">
                <input name="fullname" placeholder="Enter your Full name"/>
                <input name="email" placeholder="Enter your email address" />
                <input name="subject" placeholder="Enter Subject" />
                <textarea name="message" placeholder="Enter your message" rows="6"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}