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

export default function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className='project'>
            <img src={project1} alt="Project 1" />
            <p>COMP125 Assignment 1 - Multiplication Table Generator</p>
            <p>My first website using javascript to create a multiplication table based on user input.</p>
            </div>
            <div className='project'>
            <img src={project2} alt="Project 2" />
            <p>COMP125 Assignment 3 - BugSmasher Mini Game</p>
            <p>Created a javascript mini game called "BugSmasher".</p>
            </div>
            <div className='project'>
            <img src={project3} alt="Project 3" />
            <p>COMP125 Assignment 4 - AJAX and API's</p>
            <p>Created a javascript website using AJAX to fetch data from and API.</p>
            </div>
        </div>        
    );
}