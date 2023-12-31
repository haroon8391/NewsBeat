import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-center`}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-3 fw-bold mx-6" to="/">Newsbeat</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active fw-bold" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold" to="/entertainment">Entertainment</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.changeMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === "light" ? "dark" : "light"}  Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
