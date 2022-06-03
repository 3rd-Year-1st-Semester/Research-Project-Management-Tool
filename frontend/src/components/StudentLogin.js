import React from 'react';
import { useState } from "react";
import axios from 'axios';
import '../styles/login.css';

export default function StudentLogin() {

    if (localStorage.std_token) {
        window.location = "/dashboard";
    }

    const [student_id, setStudentID] = useState('');
    const [password, setPassword] = useState('');

    const studentData = {
        student_id, password

    }
    //insert data
    const StudentLogin = async (e) => {

        e.preventDefault();
        try {

            const { data: res } = await axios.post('http://localhost:7000/student/login', studentData);
            localStorage.setItem("std_token", res.data);
            window.location = "/dashboard"

        }
        catch (error) {
            console.log(error);
            alert("Login Failed")
        }

    }

    return (
        <div>
            <div className='container text-center form-style'>
                <center>
                    <form onSubmit={StudentLogin}>
                        <div className='form-group col-3'>
                        <img className="mb-3 mt-5" src="https://png.pngtree.com/png-vector/20191003/ourlarge/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" alt="" width="100" height="100" />  
                            <h3 className="h3 mb-3 font-weight-normal text-light">Student Login </h3>
                            <label htmlFor="inputID" className="sr-only">Student ID</label>
                            <input type="text" id="inputID" className="form-control" placeholder="Student ID" onChange={(e) => {
                                setStudentID(e.target.value);
                            }} />
                        </div>
                        <br />
                        <div className='form-group col-3'>
                            <label htmlFor="inputPassword " className="sr-only">Password</label>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                        </div>
                        <br />
                        <div className='form-group'>
                            <input type="submit" className="btn btn-lg btn-dark btn-block fw-bold col-3" name="submit" value="Login" />
                        </div>
                    </form>
                </center>
            </div>
        </div>
    )

}