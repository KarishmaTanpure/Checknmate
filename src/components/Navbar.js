import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">Home</Link> 
                <div className="dropdown">
                <span>Participant Details &#9660; </span>
                <div className="dropdown-content">
                <Link to="/add-participant">Add Participant</Link>
                <Link to="/search-participant">Search Participant</Link>
                </div>
                </div>
                <div className="dropdown">
                <span>Batch Details &#9660; </span>
                <div className="dropdown-content">
                <Link to="/create-batch">Create Batch</Link>
                <Link to="/search-batch">Search a Batch</Link>
                </div>
                </div>
                <Link to="/society-details">Society Details</Link>
                <Link to="/institution-details">Institution Details</Link>
                <Link to="/frenchise-details">Frenchise Details</Link>
                <Link to="/reports">Reports</Link>
                <Link to="/feedback">Feedback</Link>
                <div className="dropdown">
                <span>Coach &#9660; </span>
                <div className="dropdown-content">
                <Link to="/add-coach">Add a Coach</Link>
                <Link to="/search-coach">Search a Coach</Link>
                <Link to="/assign-coach">Assignment Of a Coach</Link>
                <Link to="/time-table">Time Tables</Link>
                <Link to="/avail-coach">Availability Of a Coach</Link>
                <Link to="/reminder">Reminders</Link>
                <Link to="/participant-attendnce">Participant Attendance</Link>
                <Link to="/coach-attendnce">Coach Attendance</Link>
                <Link to="/search-coach">Search Coach</Link>
                </div>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;