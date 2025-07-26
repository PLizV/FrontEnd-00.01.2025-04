import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from './Explore';
import Create from './Create';
import Sidebar from '../components/Sidebar';
import Search from './Search'; 
// En App.jsx o main.jsx
import "./styles.css";


export default function App() {
  const [showLogoPanel, setShowLogoPanel] = useState(false);

  return (
    <Router>
      <div className="d-flex vh-100">
        <Sidebar onLogoClick={() => setShowLogoPanel(!showLogoPanel)} />
        <div className="flex-grow-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Explore />} />
            <Route path="/crear" element={<Create />} />
            <Route path="/buscar" element={<Search />} /> 
          </Routes>
        </div>
        {showLogoPanel && (
          <div className="logo-panel p-3">
            <h4>Información de Pinterest</h4>
            <p>Inspiración infinita, un pin a la vez.</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
              alt="Pinterest Info"
              width="80"
              height="80"
            />
          </div>
        )}
      </div>
    </Router>
  );
}
