import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

const TitleBar = () => {
    return ( 
        <ul class="nav-bar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/biography">Bio</Link>
            </li>
        </ul>
     );
}
 
export default TitleBar;