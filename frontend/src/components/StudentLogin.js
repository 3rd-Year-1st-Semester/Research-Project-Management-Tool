import React from 'react';
import { useState } from "react";
import axios from 'axios';
import '../styles/login.css';

export default function StudentLogin() {

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
            window.location = "/student/dashboard"

        }
        catch (error) {
            console.log(error);
            alert("Login Failed")
        }

    }

    return (
        <div>
            <div className='container text-center form-style'>

                <form onSubmit={StudentLogin}>
                    <h3 className="h3 mb-3 font-weight-normal">Student Login Panel</h3>
                    <label htmlFor="inputID" className="sr-only">Student ID</label>
                    <input type="text" id="inputID" className="form-control col-3" placeholder="Student ID" onChange={(e) => {
                        setStudentID(e.target.value);
                    }} />
                    <br />
                    <label htmlFor="inputPassword " className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control col-3" placeholder="Password" onChange={(e) => {
                        setPassword(e.target.value);
                    }} /><br />

                    <input type="submit" className="btn btn-lg btn-primary btn-block col-3" name="submit" value="Login"/>

                </form>
            </div>
        </div>
    )

}