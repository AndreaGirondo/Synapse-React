import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import HomePage from '../pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;