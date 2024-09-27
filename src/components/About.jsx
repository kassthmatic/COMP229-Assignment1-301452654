/*
File name: About.jsx
Student’s Name: Kassandra Furtado
StudentID: 301452654
Date: September 27, 2024
*/

/* Imports */
import myPhoto from '../assets/images/kass.jpg';
import resumePDF from '../assets/KassandraFurtadoResume.pdf'

/* About */
export default function About() {
    return (
    <div className="about">
        <h1>About Me</h1>

        {/* Image of Me */}
        <img src={myPhoto} alt="Kassandra Furtado" className="profile-pic" />
        
        {/* Short Paragraph About Me */}
        <p>Hi, my name is Kassandra Furtado, feel free to call me Kass. <br>
        </br>I am a software engineering student at Centennial College with a passion for building intuitive and scalable web applications.</p>
        <br></br>
        
        {/* Resume Download Link */}
        <a href={resumePDF} download className="btn"> Download My Resume</a>
    </div>
    );
}