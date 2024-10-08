/*
File name: Contact.jsx
Student’s Name: Kassandra Furtado
StudentID: 301452654
Date: September 27, 2024
*/

/* Imports */
import { useState } from 'react';

/* Contact Component */
export default function Contact(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: '',
    });

    /* Form Submission Handler */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="contact">
            <br></br>            
            <h1>Contact Me</h1>
            <hr></hr>

            {/* Contact Info Panel */}
            <div className="contact-info-panel">
                <h2>My Contact Information</h2>
                <p><strong>Email:</strong> kasscodes@gmail.com</p>
            </div>
            <br></br>
            <hr></hr>
            <br></br>

            {/* Contact Form */}
            <p>If you would like to contact me, please fill out the information below.</p>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" id="firstName" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} autoComplete="given-name"/> <br></br>
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} autoComplete="family-name"/> <br></br>
                <input type="text" id="contactNumber" name="contactNumber" placeholder="Contact Number" required value={formData.contactNumber} onChange={e => setFormData({...formData, contactNumber: e.target.value})} autoComplete="tel"/> <br></br>
                <input type="email" id="email" name="email" placeholder="Email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} autoComplete="email"/> <br></br>
                <textarea id="message" name="message" placeholder="Message" required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} autoComplete="off"/> <br></br>
                <br></br>
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    )
}