import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Counter() {
    const [count, setCount] = useState(0);
    return (
    <body>
        <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/notfound">Not Found</Link></li>
        <li><Link to="/about">About</Link></li>
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