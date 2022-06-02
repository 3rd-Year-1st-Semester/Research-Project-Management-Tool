import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

function AllGroups() {

    const [group, setGroup] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:7000/group/')
            .then((res) => {
                setGroup(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            })

    }, [])


    //Delete Groups
    const deleteGroup = (id) => {

        axios.delete(`http://localhost:7000/group/delete/${id}`)
            .then((res) => {
                alert(res.data);
                window.location = "/user/allgroups"
            })
            .catch((err) => {
                console.log(err);
            })

    }

    return (
        <div className='container mt-5'>
            <center>

                <h2>REGISTERED STUDENT GROUPS</h2>

                {
                    group.map((value, key) => {

                        return (
                                <table className='table table-striped table-bordered' style={{ backgroundColor: "white" }}>
                                    <thead>
                                        <th>Subject</th>
                                        <th>Group Name</th>
                                        <th>Academic Year</th>
                                        <th>Semester</th>
                                        <th>Students</th>
                                        <th>Created Student</th>
                                    </thead>
                                    <tbody>


                                        <tr>
                                            <td>{value.subject_name}</td>
                                            <td>{value.group_name}</td>
                                            <td>{value.academic_year}</td>
                                            <td>{value.semester}</td>
                                            <td>
                                                <tr className='table-bordered'>
                                                    <tr>
                                                        <td>Member 01 : </td>
                                                        <td width="180px">{value.student_1_reg}</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td width="180px">{value.student_1_name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td width="180px">{value.student_1_contact}</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td width="180px">{value.student_1_email}</td>
                                                    </tr>
                                                </tr>
                                                <tr className='table-bordered'>
                                                    <tr>
                                                        <td>Member 02 : </td>
                                                        <td width="180px">{value.student_2_reg}</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td width="180px">{value.student_2_name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td width="180px">{value.student_2_contact}</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td width="180px">{value.student_2_email}</td>
                                                    </tr>
                                                </tr>
                                                <tr className='table-bordered'>
                                                    <tr>
                                                        <td>Member 03 : </td>
                                                        <td width="180px">{value.student_3_reg}</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td width="180px">{value.student_3_name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td width="180px">{value.student_3_contact}</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td width="180px">{value.student_3_email}</td>
                                                    </tr>
                                                </tr>
                                                <tr className='table-bordered'>
                                                    <tr>
                                                        <td>Member 04 : </td>
                                                        <td width="180px">{value.student_4_reg}</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td width="180px">{value.student_4_name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td width="180px">{value.student_4_contact}</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td width="180px">{value.student_4_email}</td>
                                                    </tr>
                                                </tr>
                                            </td>
                                            <td width="200px">{value.created_by}</td>
                                            <td>
                                                <tr>
                                                    <td><a
                                                        href={`/user/groupupdate/${value._id}`} className='btn btn-success w-100 mt-4'>Update</a></td>
                                                </tr>
                                                <tr>
                                                    <td><button className='btn btn-danger w-100' onClick={() => { deleteGroup(value._id) }}>Delete</button></td>
                                                </tr>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                        )

                    })
                }
            </center>
        </div>
    );
}

export default AllGroups;