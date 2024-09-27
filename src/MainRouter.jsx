/*
File name: MainRouter.jsx
Student’s Name: Kassandra Furtado
StudentID: 301452654
Date: September 27, 2024
*/

/* Imports */
import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';
import Services from "./components/Services";
import Projects from "./components/Projects";
import Layout from "./components/Layout";

/* MainRouter Component */
const MainRouter = () => {
  return (
    <div>
        {/* Layout Component for Nav and Page Structure */}
      <Layout />

      {/* Routes for Nav */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default MainRouter;