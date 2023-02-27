import React from "react";

function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg mt-2">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link  dropdown-toggle" aria-current="page" href role="button" data-bs-toggle="dropdown" aria-expanded="false">Courses</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href>Web Development</a></li>
                            <li><a className="dropdown-item" href>Data Science</a></li>
                            <li><a className="dropdown-item" href>Java</a></li>
                            <li><a className="dropdown-item" href>C++</a></li>
                            <li><a className="dropdown-item" href>Finance</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href>PW Skills Lab</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href>Job Portal</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href>Experience Portal</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href>Become an affiliate</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href>Hall of fame</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            More
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href>Action</a></li>
                            <li><a className="dropdown-item" href>Another action</a></li>
                            <li><a className="dropdown-item" href>Something else here</a></li>
                        </ul>
                    </li>
                </ul>
                </div>
          
        </nav>
        </>
    )
}

export default Navbar