import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

function Navbar() {

    const token = localStorage.getItem('std_token');
    const decode = jwtDecode(token);

    const [student,setStudent] = useState([]);
    console.log(student);
    
    useEffect(()=>{

        axios.get(`https://research-tool-backend.herokuapp.com/student/${decode._id}`)
        .then((res)=>{
            setStudent(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])

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
                            <li className='nav-item' style={{ marginLeft: "700px" }}>
                                <a className='nav-link text-light'>Welcome {student.full_name}</a>
                            </li>
                            <li class="nav-item" style={{ marginLeft: "20px" }}>
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