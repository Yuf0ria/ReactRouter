import React from 'react';
import { Link } from 'react-router-dom';


function About() {
    return (
        <body>
            <nav class="navbar">
                <ul class="navbar-nav">
                    <li><Link to="/" class="nav-item">Home</Link></li>
                    <li><Link to="/Contact" class="nav-item">Contact</Link></li>
                    <li><Link to="/counter" class="nav-item">Counter</Link></li>
                </ul>
            </nav>

            <div class="header">
                <h1>This is a webpage using React.</h1>
            </div>

        </body>
        
    );
}

export default About;