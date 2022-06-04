import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllStudents() {

    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get('https://research-tool-backend.herokuapp.com/student')
            .then((res) => {
                setStudent(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteStudent = (id) => {
        axios.delete(`https://research-tool-backend.herokuapp.com/student/delete/${id}`)
            .then((res) => {
                alert(res.data);
                window.location = '/allstudents'
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    return (
        <div className='container mt-5' style={{marginBottom:'100px'}}>

            <center>
                <h1 className='text-light mb-2'>All Students</h1>

                <table className='table table-bordered text-center bg-light'>
                    <thead>
                        <tr>
                            <th scope='col'>Student ID</th>
                            <th scope='col'>Full Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Contact No</th>
                            <th scope='col'>Faculty</th>
                            <th scope='col'>Academic Year</th>
                            <th scope='col'>Semester</th>
                            <th scope='col'>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.map((value, key) => {

                                return (
                                    <tr>
                                        <td>{value.student_id}</td>
                                        <td>{value.full_name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.contact_number}</td>
                                        <td>{value.faculty}</td>
                                        <td>{value.academic_year}</td>
                                        <td>{value.semester}</td>
                                        <td><button className='btn btn-success'>Update</button> <button className='btn btn-danger' onClick={() => { deleteStudent(value._id) }}>Delete</button></td>
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
export default AllStudents;