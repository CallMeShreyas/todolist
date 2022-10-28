import React from 'react'
import {Link} from 'react-router-dom'
import About from './About.js'
export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {props.isAbout ? <div className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>

                        </div> : <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>}
                    </ul>

                    {/* <Link className="nav-link" to="/about">About</Link> */}
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    title: "Your Title Here",
    isAbout: false
}