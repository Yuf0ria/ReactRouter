import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Counter() {
    const [count, setCount] = useState(0);
    return (
    <body>
        <div class ="navigation">
            <nav class="navbar">
                <ul class="navbar-nav">
                    <li><Link to="/" class="nav-item">Home</Link></li>
                    <li><Link to="/Contact" class="nav-item">Contact</Link></li>
                    <li><Link to="/about"  class="nav-item">About</Link></li>
                </ul>
            </nav>

        </div>

        <div class="Header">
            <p>You clicked {count} times</p>
            <Button onClick={() => setCount(count + 1)}>Click me</Button>
            <Button onClick={() => setCount(prev => prev + 1)}>Increment</Button>
            <Button onClick={() => setCount(prev => prev - 1)}>Decrement</Button>
            <Button onClick={() => setCount(0)}>Reset</Button>
        </div>

    </body>
    );
    }

export default Counter;