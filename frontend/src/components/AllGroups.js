import React, { useEffect, useState } from 'react';
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

    return (
        <div className='container mt-5'>
            <center>

            <h2>REGISTERED STUDENT GROUPS</h2>

            <table className='table table-striped table-bordered' style={{backgroundColor:"white"}}>
                <thead>
                    <th>Subject</th>
                    <th>Group Name</th>
                    <th>Academic Year</th>
                    <th>Semester</th>
                    <th>Students</th>
                </thead>
                <tbody>
                    {
                        group.map((value,key)=>{

                            return(

                                <tr>
                                    <td width="200px">{value.subject_name}</td>
                                    <td width="120px">{value.group_name}</td>
                                    <td width="150px">{value.academic_year}</td>
                                    <td width="120px">{value.semester}</td>
                                    <td className='table-bordered'>
                                        <tr>
                                            <th>Reg No</th>
                                            <th>Name</th>
                                            <th>Contact</th>
                                        </tr>
                                        <tr>
                                            <td width="100px">{value.student_1[0]}</td>
                                            <td width="180px">{value.student_1[1]}</td>
                                            <td width="100px">{value.student_1[2]}</td>
                                        </tr>
                                        <tr>
                                            <td width="100px">{value.student_2[0]}</td>
                                            <td width="180px">{value.student_2[1]}</td>
                                            <td width="100px">{value.student_2[2]}</td>
                                        </tr>
                                        <tr>
                                            <td width="100px">{value.student_3[0]}</td>
                                            <td width="180px">{value.student_3[1]}</td>
                                            <td width="100px">{value.student_3[2]}</td>
                                        </tr>
                                        <tr>
                                            <td width="100px">{value.student_4[0]}</td>
                                            <td width="180px">{value.student_4[1]}</td>
                                            <td width="100px">{value.student_4[2]}</td>
                                        </tr>
                                    </td>
                                    <td>
                                        <tr>
                                            <td><button className='btn btn-success w-100 mt-4'>Update</button></td>
                                        </tr>
                                        <tr>
                                            <td><button className='btn btn-danger w-100' >Delete</button></td>
                                        </tr>
                                    </td>
                                </tr>

                            )

                        })
                    }
                </tbody>
            </table>
            </center>
        </div>
    );
}

export default AllGroups;