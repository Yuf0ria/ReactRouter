import React from 'react';
import { Link } from 'react-router-dom';


function Layout() {
    return (
        <nav class="navbar">
                <ul class="navbar-nav">
                    <li><Link to="/about" class="nav-item">About</Link></li>
                    <li><Link to="/Contact" class="nav-item">Contact</Link></li>
                    <li><Link to="/counter" class="nav-item">Counter</Link></li>
                </ul>
        </nav>
    );
}

export default Layout;