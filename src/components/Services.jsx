/*
File name: Services.jsx
Student’s Name: Kassandra Furtado
StudentID: 301452654
Date: September 27, 2024
*/

/* Imports */
import services1 from '../assets/images/webdev.png'
import services2 from '../assets/images/programming.png'
import services3 from '../assets/images/fullstack.png'


/* Services */
export default function Services(){
    return (
        <div>
        <h1>Services</h1>        
        <p>I offer a comprehensive range of digital solutions to bring your ideas to life. My expertise spans across various domains of software development to meet all your technical needs.</p>        
        <hr></hr>
        
        <img className='services-pic' src={services1} alt="Web Dev Service Pic"/>
        <h3>Web Development</h3>
        <ul>
            <li>Custom web design and development</li>
            <li>E-commerce solutions</li>
            <li>Content management systems (CMS) implementation</li>
        </ul>
        <hr></hr>

        <img className='services-pic' src={services2} alt="Programming Service Pic"/>
        <h3>Programming</h3>
        <ul>
            <li>C++ Development</li>
            <li>Full-Stack Development: JavaScript, Node.js, Python</li>
            <li>Mobile Development: React Native, Flutter</li>
        </ul>
        <hr></hr>
        
        <img className='services-pic' src={services3} alt="Full Stack Service Pic"/>
        <h3>Full Stack Web App Development</h3>
        <ul>
            <li>End-to-end web applications with cloud integration</li>
        </ul>
        <hr></hr>
        
        <h5>References:</h5>
        <footer>
            <ul>
                <li><b>Web Dev Service Pic:</b> https://medium.com/@marketing_96275/proven-fastest-way-to-learn-web-development-f0586b9d253d</li>
                <li><b>Programming Service Pic:</b> https://smartbear.com/blog/best-programming-language-to-learn-first/</li>
                <li><b>Full Stack Service Pic</b> https://www.geeksforgeeks.org/what-is-full-stack-development/</li>
            </ul>
        </footer>
        </div>
    );
}