import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Counter() {
    const [count, setCount] = useState(0);
    return (
    <body>
        <nav class="navbar">
            <ul class="navbar-nav">
                <li><Link to="/" class="nav-item">Home</Link></li>
                <li><Link to="/Contact" class="nav-item">Contact</Link></li>
                <li><Link to="/about"  class="nav-item">About</Link></li>
            </ul>
        </nav>

        <div class="">
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>

    </body>
    );
    }

export default Counter;