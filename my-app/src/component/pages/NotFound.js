import React from 'react';
import { Link } from 'react-router-dom';


function NotFound() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/counter">Counter</Link></li>
            </ul>
        </nav>
    );
}

export default NotFound;