import React from 'react';
import { Link } from 'react-router-dom';


function Contact() {
    return (
        <body>
            <nav class="navbar">
                <ul class="navbar-nav">
                    <li><Link to="/" class="nav-item">Home</Link></li>
                    <li><Link to="/about" class="nav-item">About</Link></li>
                    <li><Link to="/notfound" class="nav-item">Not Found</Link></li>
                    <li><Link to="/counter" class="nav-item">Counter</Link></li>
                </ul>
            </nav>

            <div class="header">
                <h1 class ="large">unfortunately we cannot be contact by this time.</h1>
            </div>

        </body>
    );
}

export default Contact;