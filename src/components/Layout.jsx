/*
File name: Layout.jsx
Student’s Name: Kassandra Furtado
StudentID: 301452654
Date: September 27, 2024
*/

/* Imports */
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

/* Layout */
export default function Layout() {
  return (
    <>
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Nav Bar */}
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about"> About</Link> | 
        <Link to="/services"> Services</Link> | 
        <Link to="/projects"> Projects</Link> | 
        <Link to="/contact"> Contact</Link>
      </nav>
      </header>
    </>
  );
}