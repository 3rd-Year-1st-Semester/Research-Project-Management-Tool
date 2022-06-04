import React, { useEffect } from 'react';
import { useState } from "react";
import axios from 'axios';
import '../styles/login.css';
import jwtDecode from 'jwt-decode';

export default function UserLogin() {

    const token = localStorage.user_token;

    if (token) {
        window.location = "/user/dashboard";
    }

    const [user_id, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const userData = {
        user_id, password
    }
    
    //insert data
    const UserLogin = async (e) => {

        e.preventDefault();
        try {

            const { data: res } = await axios.post('https://research-tool-backend.herokuapp.com/user/login', userData);
            localStorage.setItem("user_token", res.data);
            
            if(res.role == "Staff"){
                window.location = "/user/dashboard"
            }
            else{
                window.location = "/admin/dashboard"
            }
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
                    <form onSubmit={UserLogin}>
                        <div className='form-group col-3 '>
                        <img className="mb-3 mt-5" src="https://png.pngtree.com/png-vector/20190919/ourlarge/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg" alt="" width="100" height="100" />  
                            <h3 className="h3  text-light mb-3 font-weight-normal">User Login</h3>
                            
                            <label htmlFor="inputID" className="sr-only">User ID</label>
                            <input type="text" id="inputID" className="form-control" placeholder="User ID" onChange={(e) => {
                                setUserID(e.target.value);
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