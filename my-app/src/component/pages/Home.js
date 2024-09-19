import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            <nav class="navbar">
                <ul class="navbar-nav">
                    <li><Link to="/about" class="nav-item">About</Link></li>
                    <li><Link to="/Contact" class="nav-item">Contact</Link></li>
                    <li><Link to="/counter" class="nav-item">Counter</Link></li>
                </ul>
            </nav>
            <div class="header">
                <h1>Welcome User</h1>
            </div>
        </div>
    );
}

export default Home;