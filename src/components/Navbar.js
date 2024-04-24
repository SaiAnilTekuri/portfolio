import React from "react"
import { Link } from 'react-router-dom'
import namelogo from "../images/name-logo.png"


function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar--div">
                <div className="navbar--heading">
                    <img  className="navbar--logo" src={namelogo} alt="name" />
                </div>
                <div className="navbar--elements">
                    <ul>
                        <li>
                            <Link to="/">Work</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1diWxHqpaHevD80fs5FAG3lDrpK8L7-q-/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar