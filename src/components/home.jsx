/*
File name: home.jsx
Student’s Name: Kassandra Furtado
StudentID: 301452654
Date: September 27, 2024
*/

/* Imports */
import { Link } from 'react-router-dom';

/* Home */
export default function Home() {
    return (
        <div className="home">
            <h1>My Portfolio</h1>

            {/* Mission Statement */}
            <p>Developing clean and efficient business solutions one project at a time.</p>
            <br>
            </br>
            {/* About Me Link */}
            <Link to="/about" className="btn">Learn More About Me</Link>
        </div>
    )
}