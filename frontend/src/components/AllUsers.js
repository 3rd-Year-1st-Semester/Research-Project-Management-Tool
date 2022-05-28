import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllUsers() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:7000/user')
            .then((res) => {
                setUser(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteUser = (id) => {
        axios.delete(`http://localhost:7000/user/delete/${id}`)
            .then((res) => {
                alert(res.data);
                window.location = '/allusers'
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    return (
        <div className='container'>

            <center>
                <h1>All Users</h1>

                <table className='table table-bordered text-center'>
                    <thead>
                        <tr>
                            <th scope='col'>User ID</th>
                            <th scope='col'>Full Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Contact No</th>
                            <th scope='col'>Faculty</th>
                            <th scope='col'>User Role</th>
                            <th scope='col'>User Type</th>
                            <th scope='col'>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((value, key) => {

                                return (
                                    <tr>
                                        <td>{value.user_id}</td>
                                        <td>{value.full_name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.contact_number}</td>
                                        <td>{value.faculty}</td>
                                        <td>{value.user_role}</td>
                                        <td>{value.user_type}</td>
                                        <td><button className='btn btn-success'>Update</button> <button className='btn btn-danger' onClick={() => { deleteUser(value._id) }}>Delete</button></td>
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
export default AllUsers;