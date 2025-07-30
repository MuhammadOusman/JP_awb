import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaHome, FaMapMarkerAlt, FaSearch, FaPlus } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <div className="bg-light border-bottom">
      <div className="container d-flex justify-content-between align-items-center py-2">
        <div className="d-flex align-items-center gap-4">
          <Link to="/" className="text-primary fs-3 fw-bold text-decoration-none">OLX</Link>
          <div className="d-flex align-items-center gap-3">
            <Link to="/" className="text-dark text-decoration-none d-flex align-items-center">
              <FaCar className="me-1" />
              <span>Motors</span>
            </Link>
            <Link to="/" className="text-dark text-decoration-none d-flex align-items-center">
              <FaHome className="me-1" />
              <span>Property</span>
            </Link>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <Link to="#" className="text-dark fw-bold text-decoration-underline">LogIn</Link>
          <Link to="/add" className="sell-btn d-flex align-items-center px-3 py-1">
            <FaPlus className="me-1" /> SELL
          </Link>
        </div>
      </div>
      <div className="container py-2 d-flex flex-wrap gap-2">
        <div className="input-group" style={{ maxWidth: '200px' }}>
          <span className="input-group-text bg-white">
            <FaMapMarkerAlt />
          </span>
          <select className="form-select">
            <option>Pakistan</option>
            <option>Lahore</option>
            <option>Karachi</option>
          </select>
        </div>
        <div className="input-group flex-grow-1">
          <input
            type="text"
            className="form-control"
            placeholder="Find Cars, Mobile Phones and more..."
          />
          <button className="btn btn-dark d-flex align-items-center gap-1">
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
