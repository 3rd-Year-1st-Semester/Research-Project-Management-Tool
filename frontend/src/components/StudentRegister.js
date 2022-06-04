import React, { useState } from "react";
import axios from "axios";
import '../styles/StudentRegister.css';

export default function StudentRegister() {

    const [student_id, setStudentID] = useState('');
    const [full_name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [contact_number, setContactNumber] = useState('');
    const [faculty, setFaculty] = useState('');
    const [academic_year, setAcademicYear] = useState('');
    const [semester, setSemester] = useState('');
    const [password, setPassword] = useState('');

    const studentData = {

        student_id, full_name, email, contact_number, faculty,
        academic_year, semester, password

    }

    //insert data
    const insertData = (e) => {

        e.preventDefault();
        axios.post("https://research-tool-backend.herokuapp.com/student/register/", studentData).then((res) => {
            alert(res.data.message);
            console.log(res.data.message);
            window.location = "/login";
        }).catch((err) => {
            console.log(err);
        })
        console.log(studentData)
    }

    return (
        <div>
            <div className="container py-5 h-100" style={{ marginTop: "3px" }}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card my-4">
                            <div className="row g-0">
                                <div className="col-4 d-none d-xl-block">
                                    <img src="https://static.sliit.lk/wp-content/uploads/2019/11/27094714/SLIIT-Master-of-Science-in-Information-Management.jpg"
                                        className="img-fluid" alt="register_design" />

<img src="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/ftadmin/wp-content/uploads/2016/09/15175352/Untitled-552.jpg"
                                        className="img-fluid" alt="register_design" />
                                </div>
                                <div className="col">
                                    <form onSubmit={insertData}>
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase">Student Sign Up</h3>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" name="student_id" id="student_id" className="form-control form-control-lg" onChange={(e) => {
                                                            setStudentID(e.target.value);
                                                        }} />
                                                        <label className="form-label" for="student_id">SLIIT ID</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" name="full_name" id="full_name" className="form-control form-control-lg" onChange={(e) => {
                                                            setFullName(e.target.value);
                                                        }} />
                                                        <label className="form-label" for="full_name">Full Name</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="email" name="email" id="email" className="form-control form-control-lg" onChange={(e) => {
                                                            setEmail(e.target.value);
                                                        }} />
                                                        <label className="form-label" for="email">Email</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" name="contact_number" id="contact_number" className="form-control form-control-lg" onChange={(e) => {
                                                            setContactNumber(e.target.value);
                                                        }} />
                                                        <label className="form-label" for="contact_number">Contact Number</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <select name="faculty" id="faculty" className="form-select" onChange={(e) => {
                                                    setFaculty(e.target.value);
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
                                                <input type="text" name="academic_year" id="academic_year" className="form-control form-control-lg" onChange={(e) => {
                                                    setAcademicYear(e.target.value);
                                                }} />
                                                <label className="form-label" for="academic_year">Academic Year</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <select name="semester" id="semester" className="form-select" onChange={(e) => {
                                                    setSemester(e.target.value);
                                                }}>
                                                    <option value="">Select one...</option>
                                                    <option value="1st Semester (Jan-Jun)">1st Semester (Jan-Jun)</option>
                                                    <option value="2nd Semester (Jan-Jun)">2nd Semester (Jan-Jun)</option>
                                                    <option value="1st Semester (Jun-Dec)">1st Semester (Jun-Dec)</option>
                                                    <option value="2nd Semester (Jun-Dec)">2nd Semester (Jun-Dec)</option>
                                                </select>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" name="password" id="password" className="form-control form-control-lg" onChange={(e) => {
                                                    setPassword(e.target.value);
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