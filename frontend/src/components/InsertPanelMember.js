import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InsertPanelMember() {

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

    const setPanelMembers = (user_id,full_name,email) =>{

        const data = {
            user_id,
            full_name,
            email                        
        }

        axios.post('http://localhost:7000/panelmember/insert',data)
        .then((res)=>{
            alert(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    return (
        <div className='container'>

            <h2>Insert Panel members</h2>

            <center>

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
                                        <td><button className='btn btn-success' onClick={()=>{setPanelMembers(value.user_id,value.full_name,value.email)}}>Insert to Panel Members</button></td>
                                        
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