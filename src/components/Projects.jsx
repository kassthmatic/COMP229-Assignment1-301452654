/*
File name: Projects.jsx
Student’s Name: Kassandra Furtado
StudentID: 301452654
Date: September 27, 2024
*/

/* Imports */
import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'

/* Projects */
export default function Projects() {
    return (
        <div className="projects">
            <br></br>
            <h1>Projects</h1>
            <hr></hr>
            <div className='project'>
                <br></br>
            <img className='project-pic' src={project1} alt="Project 1" />
            <h3>COMP125 Assignment 1 - Multiplication Table Generator</h3>
            <p>My first website using javascript to create a multiplication table based on user input.</p>
            <br></br>
            <hr></hr>
            </div>
            
            <div className='project'>
                <br></br>
            <img className='project-pic' src={project2} alt="Project 2" />
            <h3>COMP125 Assignment 3 - BugSmasher Mini Game</h3>
            <p>Created a javascript mini game called "BugSmasher".</p>
            <br></br>
            <hr></hr>
            </div>

            <div className='project'>
                <br></br>
            <img className='project-pic' src={project3} alt="Project 3" />
            <h3>COMP125 Assignment 4 - AJAX and API's</h3>
            <p>Created a javascript website using AJAX to fetch data from and API.</p>
            </div>
        </div>        
    );
}