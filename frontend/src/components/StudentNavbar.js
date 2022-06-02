import React from 'react';

function Navbar() {

    const logOut = () => {
        localStorage.clear();
        window.location = "/"
    }

    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-4">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item" style={{ marginRight: "30px" }}>
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item" style={{ marginRight: "30px" }}>
                                <a class="nav-link" href="/dashboard">Dashboard</a>
                            </li>
                            <li class="nav-item" style={{ marginRight: "30px" }}>
                                <a class="nav-link" href="/Uploads">Uploads</a>
                            </li>
                            <li class="nav-item" style={{ marginRight: "30px" }}>
                                <a class="nav-link" href="/markingstudent">Marking Schemas</a>
                            </li>
                            <li class="nav-item" style={{ marginRight: "30px" }}>
                                <a class="nav-link" href="/groupregister">Group Register</a>
                            </li>
                            <li class="nav-item" style={{ marginRight: "30px" }}>
                                <button className='btn btn-danger' onClick={() => { logOut() }}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>

    );
}

export default Navbar;