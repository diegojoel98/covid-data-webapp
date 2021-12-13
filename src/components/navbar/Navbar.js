import React from 'react';
import './navbar.css';

// Bootstrap navbar
export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#C8E6C9" }}>
            <a className="navbar-brand" href="/">Covid-19 Webapp  <i className="fas fa-virus"></i></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#covid-world">Covid in the World</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#daily-summary">Daily Summary</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}