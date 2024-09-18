import React, { useState } from 'react';


function Counter() {
    const [count, setCount] = useState(0);
    return (
    <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
    <button onClick={() => setCount(0)}>Reset</button>
    </div>
    );
    }

export default Counter;