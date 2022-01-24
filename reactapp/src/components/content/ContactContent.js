import React from "react";

export default function ContactContent() {
    return (
        <div>
            <form>
                <input name="fullname" placeholder=""="Enter your Full name"/>
                <input name="email" placeholder="Enter your email address" />
                <input name="subject" placeholder="Enter Subject" />
                <textarea name="message" placeholder="Enter your message"></textarea>
            </form>
        </div>
    );
}