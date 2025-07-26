import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Plus, Bell, MessageCircle } from 'react-feather';
//import './Sidebar.css';

const Sidebar = ({ onLogoClick }) => {
  return (
    <div className="d-flex flex-column align-items-center py-4 bg-light sidebar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
        alt="Pinterest logo"
        width="40"
        height="40"
        className="mb-4 clickable"
        onClick={onLogoClick}
      />
      <Link to="/" className="mb-4 text-dark"><Home size={28} /></Link>
      <Link to="/buscar" className="mb-4 text-dark"><Search size={28} /></Link>
      <Link to="/crear" className="mb-4 text-dark"><Plus size={28} /></Link>
      <span className="mb-4 text-secondary"><Bell size={28} /></span>
      <span className="mb-4 text-secondary"><MessageCircle size={28} /></span>
    </div>
  );
};
export default Sidebar;