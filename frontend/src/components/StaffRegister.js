import React, { useState } from "react";
import axios from "axios";
import '../styles/StudentRegister.css';

export default function StaffRegister() {

    const [user_id, setuser_id] = useState('');
    const [full_name, setfull_name] = useState('');
    const [email, setemail] = useState('');
    const [contact_number, setcontact_number] = useState('');
    const [faculty, setfaculty] = useState('');
    const [user_type, setuser_type] = useState('');
    const [password, setpassword] = useState('');

    const user_role = "Staff";

    const StaffData = {

        user_id, full_name, email, contact_number, faculty, user_role, user_type, password
    }

    //insert data
    const insertData = (e) => {

        e.preventDefault();
        axios.post("http://localhost:7000/user/register/", StaffData).then((res) => {
            alert(res.data.message);
            console.log(res.data.message);
            window.location = "/login";
        }).catch((err) => {
            console.log(err);
        })
        console.log(StaffData)
    }

    return (
        <div>
            <div className="container py-5 h-100" style={{ marginTop: "3px" }}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card my-4">
                            <div className="row g-0">
                                <div className="col-4 d-none d-xl-block">
                                    <img src="https://static.sliit.lk/wp-content/uploads/2019/07/09024816/The-inaugural-general-meeting-of-the-Alumni-Chapter-of-Quantity-Surveyors-of-SLIIT-1.jpg"
                                        className="img-fluid" alt="register_design" />

                                    <img src="https://static.sliit.lk/wp-content/uploads/2019/09/07120519/SLIIT-OPEN-DAY-2019-was-held-successfully-at-SLIIT-Malabe-Campus15.jpg"
                                        className="img-fluid" alt="register_design" />
                                </div>
                                <div className="col">
                                    <form onSubmit={insertData}>
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase">Staff Sign Up</h3>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" name="user_id" id="user_id" className="form-control form-control-lg" onChange={(e) => {
                                                            setuser_id(e.target.value);
                                                        }} />
                                                        <label className="form-label" for="user_id">SLIIT ID</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" name="full_name" id="full_name" className="form-control form-control-lg" onChange={(e) => {
                                                            setfull_name(e.target.value);
                                                        }} />
                                                        <label className="form-label" for="full_name">Full Name</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="email" name="email" id="email" className="form-control form-control-lg" onChange={(e) => {
                                                            setemail(e.target.value);
                                                        }} />
                                                        <label className="form-label" for="email">Email</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" name="contact_number" id="contact_number" className="form-control form-control-lg" onChange={(e) => {
                                                            setcontact_number(e.target.value);
                                                        }} />
                                                        <label className="form-label" for="contact_number">Contact Number</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <select name="faculty" id="faculty" className="form-select" onChange={(e) => {
                                                    setfaculty(e.target.value);
                                                }}>
                                                    <option value="">Select one...</option>
                                                    <option value="Faculty of Computing">Faculty of Computing</option>
                                                    <option value="Faculty of Business">Faculty of Business</option>
                                                    <option value="Faculty of Engineering">Faculty of Engineering</option>
                                                    <option value="Faculty of Humanities and Sciences">Faculty of Humanities and Sciences</option>
                                                </select>
                                                <label className="form-label" for="Faculty">Faculty</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <select name="user_type" id="user_type" className="form-select" onChange={(e) => {
                                                    setuser_type(e.target.value);
                                                }}>
                                                    <option value="">Select one...</option>
                                                    <option value="Superviser">Superviser</option>
                                                    <option value="Co-Superviser">Co-Superviser</option>

                                                </select>
                                                <label className="form-label" for="user_type">User Type</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" name="password" id="password" className="form-control form-control-lg" onChange={(e) => {
                                                    setpassword(e.target.value);
                                                }} />
                                                <label className="form-label" for="password">Password</label>
                                            </div>

                                            <div className="d-flex justify-content-end pt-3">
                                                <button type="button" className="btn btn-light btn-lg">Reset all</button>
                                                <input type="submit" className="btn btn-primary btn-lg ms-2" value="Submit form" />
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}