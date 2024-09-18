import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <nav>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/notfound">Not Found</Link></li>
                <li><Link to="/counter">Counter</Link></li>
            </ul>
        </nav>
    );
}

export default Home;