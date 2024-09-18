import React from 'react';
import { Link } from 'react-router-dom';


function About() {
    return (
        <nav>
        <ul>
        <li><Link to="/about">Home</Link></li>
        <li><Link to="/">About</Link></li>
        </ul>
        </nav>
    );
}

export default About;