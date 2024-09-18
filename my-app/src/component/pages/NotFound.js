import React from 'react';
import { Link } from 'react-router-dom';


function NotFound() {
    return (
        <body>
            <nav class="navbar">
            <ul class="navbar-nav">
                <li><Link to="/" class="nav-item">Home</Link></li>
            </ul>
            </nav>

            <div class="header">
                <h1 class ="large">404 page not Found</h1>
            </div>
        </body>
    );
}

export default NotFound;