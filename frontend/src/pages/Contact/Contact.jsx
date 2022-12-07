import React from 'react'
import "./Contact.css";

const Contact = () => {
    return (
    <div class="navbar-header">
    <div class="contact">
    <div class="background">
    <h1>Contact Us</h1>
    <a href="tel:18475309221" className="btn btn-success">Call Us!</a>
    <a href="sms:18475309221" className="btn btn-warning">Text Us!</a>
    </div>
     </div>
    </div>
    )
}

export default Contact;