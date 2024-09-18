import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home';
import About from './component/pages/About';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
