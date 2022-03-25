import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <h3 className="nav-title">Goal Traxter</h3>
            <ul className="nav-list">
                <li className="nav-list-items"><Link className="nav-links" to={'/'}>Dashboard</Link></li>
                <li className="nav-list-items"><Link className="nav-links" to={'/visions'}>VisionBoard</Link></li>
                <li className="nav-list-items"><Link className="nav-links" to={'/new-goal'}>New Goal</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;