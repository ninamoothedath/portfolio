import React from 'react';
import ReactDOM from 'react-dom/client';
// import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route, Routes } from "react-router-dom";
import './style.css';
import Nav from './Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Writing from './pages/Writing';
import CD from './pages/CD';
import VA from './pages/VA';
import Graphics from './pages/Graphics';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="main"> 
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/cd" element={<CD />} />
          <Route path="/va" element={<VA />} />
          <Route path="/graphics" element={<Graphics />} />
        </Routes>
      <Nav />
      </HashRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
