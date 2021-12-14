import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

// Bootstrap navbar
export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#C8E6C9" }}>
            <Link to="/covid-data-webapp" className='navbar-brand'> Covid-19 Webapp  <i className="fas fa-virus"></i></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/covid-data-webapp" className='nav-link'>Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/covid-data-webapp#covid-world" className='nav-link'>Covid in the World</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/covid-data-webapp#daily-summary" className='nav-link'>Daily Summary</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}