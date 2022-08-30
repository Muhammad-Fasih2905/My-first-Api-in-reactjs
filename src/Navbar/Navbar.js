import React from 'react'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="max-width">
                <div className="logo"> <a href="#">Portfo<span>lio.</span></a></div>
                <ul className="menu">
                    <div>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Skills</a>
                        <a href="#">Teams</a>
                        <a href="#">Contact</a>
                    </div>
                </ul>
            </div>
        </nav>

    )
}


export default Navbar