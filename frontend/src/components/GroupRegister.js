import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert'
import jwtDecode from 'jwt-decode';

function GroupRegister() {

    const token = localStorage.getItem("std_token");
    const decode = jwtDecode(token);

    let created_by = decode.student_id;

    const [subject_name, setSubjectName] = useState("");
    const [group_name, setGroupName] = useState("");
    const [academic_year, setAcademicyear] = useState("");
    const [semester, setSemester] = useState("");

    const [student_1_reg, setRegNo1] = useState("");
    const [student_2_reg, setRegNo2] = useState("");
    const [student_3_reg, setRegNo3] = useState("");
    const [student_4_reg, setRegNo4] = useState("");

    const [student_1_name, setName1] = useState("");
    const [student_2_name, setName2] = useState("");
    const [student_3_name, setName3] = useState("");
    const [student_4_name, setName4] = useState("");

    const [student_1_contact, setContact1] = useState("");
    const [student_2_contact, setContact2] = useState("");
    const [student_3_contact, setContact3] = useState("");
    const [student_4_contact, setContact4] = useState("");

    const [student_1_email, setEmail1] = useState("");
    const [student_2_email, setEmail2] = useState("");
    const [student_3_email, setEmail3] = useState("");
    const [student_4_email, setEmail4] = useState("");

    const registerGroup = (e) => {

        e.preventDefault();

        const groupObj = {
            subject_name,
            group_name,
            academic_year,
            semester,
            student_1_reg,
            student_1_name,
            student_1_contact,
            student_1_email,
            student_2_reg,
            student_2_name,
            student_2_contact,
            student_2_email,
            student_3_reg,
            student_3_name,
            student_3_contact,
            student_3_email,
            student_4_reg,
            student_4_name,
            student_4_contact,
            student_4_email,
            created_by
        }

        axios.post('http://localhost:7000/group/insert', groupObj)
            .then((res) => {

                alert(res.data);

            })
            .catch((err) => {
                console.log(err);
            })

    }

    return (
        <div className='container mt-4 card'>

            <h2>Register Now</h2>
            <form onSubmit={registerGroup}>
                <table className='table'>
                    <tr style={{ width: "100px" }}>
                        <td style={{ fontWeight: "bold" }}>Subject Name</td>
                        <td><input type="text" name="subject_name" id="subject_name" className='form-control-sm col-4' onChange={
                            (e) => {
                                setSubjectName(e.target.value)
                            }
                        } /></td>
                    </tr>
                    <tr style={{ width: "100px" }}>
                        <td style={{ fontWeight: "bold" }}>Group Name</td>
                        <td><input type="text" name="group_name" id="group_name" className='form-control-sm col-4' onChange={
                            (e) => {
                                setGroupName(e.target.value)
                            }
                        } /></td>
                    </tr>
                    <tr style={{ width: "100px" }}>
                        <td style={{ fontWeight: "bold" }}>Academic Year</td>
                        <td><input type="text" name="academic_year" id="academic_year" className='form-control-sm col-4' onChange={
                            (e) => {
                                setAcademicyear(e.target.value)
                            }
                        } /></td>
                    </tr>
                    <tr style={{ width: "100px" }}>
                        <td style={{ fontWeight: "bold" }}>Semester</td>
                        <td><input type="text" name="semester" id="semester" className='form-control-sm col-4' onChange={
                            (e) => {
                                setSemester(e.target.value)
                            }
                        } /></td>
                    </tr>
                    <tr style={{ width: "100px", marginTop: "20px" }}>
                        <td rowSpan="4" style={{ fontWeight: "bold" }}>Members</td>
                        <td>
                            <tr>
                                <td className='mt-3'>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 1 Reg No : <input type="text" name="reg_no_1" id="reg_no_1" className='form-control' required onChange={
                                            (e) => {
                                                setRegNo1(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 1 Name : <input type="text" name="name_1" id="name_1" className='form-control' required onChange={
                                            (e) => {
                                                setName1(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 1 Contact : <input type="text" name="contact_1" id="contact_1" className='form-control' required onChange={
                                            (e) => {
                                                setContact1(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 1 Email : <input type="email" name="email_1" id="email_1" className='form-control' required onChange={
                                            (e) => {
                                                setEmail1(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                </td>
                                <td>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 2 Reg No : <input type="text" name="reg_no_2" id="reg_no_2" className='form-control' required onChange={
                                            (e) => {
                                                setRegNo2(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 2 Name : <input type="text" name="name_2" id="name_2" className='form-control' required onChange={
                                            (e) => {
                                                setName2(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 2 Contact : <input type="text" name="contact_2" id="contact_2" className='form-control' required onChange={
                                            (e) => {
                                                setContact2(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 2 Email : <input type="email" name="email_2" id="email_2" className='form-control' required onChange={
                                            (e) => {
                                                setEmail2(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                </td>
                                <td>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 3 Reg No : <input type="text" name="reg_no_3" id="reg_no_3" className='form-control' required onChange={
                                            (e) => {
                                                setRegNo3(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 3 Name : <input type="text" name="name_3" id="name_3" className='form-control' required onChange={
                                            (e) => {
                                                setName3(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 3 Contact : <input type="text" name="contact_3" id="contact_3" className='form-control' required onChange={
                                            (e) => {
                                                setContact3(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 3 Email : <input type="email" name="email_3" id="email_3" className='form-control' required onChange={
                                            (e) => {
                                                setEmail3(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                </td>
                                <td>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 4 Reg No : <input type="text" name="reg_no_4" id="reg_no_4" className='form-control' required onChange={
                                            (e) => {
                                                setRegNo4(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 4 Name : <input type="text" name="name_4" id="name_4" className='form-control' required onChange={
                                            (e) => {
                                                setName4(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 4 Contact : <input type="text" name="contact_4" id="contact_4" className='form-control' required onChange={
                                            (e) => {
                                                setContact4(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 4 Email : <input type="email" name="email_4" id="email_4" className='form-control' required onChange={
                                            (e) => {
                                                setEmail4(e.target.value);
                                            }
                                        } /></td>
                                    </tr>
                                </td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="submit" name="submit" value="Register Now" className='btn bg-primary text-light mt-3'/></td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default GroupRegister;