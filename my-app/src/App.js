import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Counter from './component/counter.js';
import Contact from './component/pages/Contact.js';
import NotFound from './component/pages/NotFound.js';

function App() {
  return (
    <div class="App-header">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/counter" element={<Counter/>}/>
          </Routes>
        </Router>
      </div>
    </div>
    
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
