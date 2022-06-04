import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InsertPanelMember() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('https://research-tool-backend.herokuapp.com/user')
            .then((res) => {
                setUser(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const setPanelMembers = (user_id, full_name, email) => {

        const data = {
            user_id,
            full_name,
            email
        }

        axios.post('https://research-tool-backend.herokuapp.com/panelmember/insert', data)
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }

    return (
        <div className='container'>

            <center>
                <h2 className='mt-5 text-light'>Insert Panel members</h2>

                <table className='table table-bordered bg-light text-center mt-5 mb-5'>
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
                                        <td><button className='btn btn-success' onClick={() => { setPanelMembers(value.user_id, value.full_name, value.email) }}>Insert to Panel Members</button></td>

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

export default InsertPanelMember;