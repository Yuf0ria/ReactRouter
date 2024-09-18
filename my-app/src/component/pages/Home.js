import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        </ul>
        </nav>
    );
}

export default Home;