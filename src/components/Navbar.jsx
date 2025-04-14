import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">HG Audio</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar; 