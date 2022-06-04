import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewPanelMembers() {

    const [panelmembers, setPanelMembers] = useState([]);
    const [group, setGroup] = useState([]);

    const [full_name, setFullName] = useState('');
    const [group_name, setGroupName] = useState('');

    useEffect(() => {

        axios.get('https://research-tool-backend.herokuapp.com/panelmember')
            .then((res) => {
                setPanelMembers(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    useEffect(() => {

        axios.get('http://localhost:7000/group')
            .then((res) => {
                setGroup(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    //delete panel member
    const deletePanelMember = (id) => {

        axios.delete(`http://localhost:7000/panelmember/delete/${id}`)
            .then(() => {
                alert("Panel Member removed successfully");
                window.location = "/user/viewpanelmembers";
            })
            .catch((err) => {
                console.log(err);
            })

    }

    const insertPanelGroup = async (e) => {
        e.preventDefault();

        const data = {
            full_name, group_name
        }

        axios.post('http://localhost:7000/groupassign/insert',data)
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

        console.log(data);
    }

    return (
        <div className="container">
            <table>
                <tr>
                    <td className='col-4'>
                        <center>
                            <h2 className='mt-5'>Panel Members</h2>
                            <table className='table table-bordered text-center'>
                                <thead>
                                    <tr>
                                        <th scope='col'>User ID</th>
                                        <th scope='col'>Full Name</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        panelmembers.map((value, key) => {

                                            return (
                                                <tr>
                                                    <td>{value.user_id}</td>
                                                    <td>{value.full_name}</td>
                                                    <td>{value.email}</td>
                                                    <td><button className='btn btn-danger' onClick={() => { deletePanelMember(value._id) }}>Remove</button></td>
                                                </tr>
                                            )

                                        })
                                    }
                                </tbody>
                            </table>
                        </center>
                    </td>
                    <td></td>
                    <td className='col-4'>
                        <center>
                            <h2 className='mt-5'>Assign to group</h2>

                            <form onSubmit={insertPanelGroup}>
                                <label>Full Name</label>
                                <select name='full_name' className='form-control' onChange={(e) => {
                                    setFullName(e.target.value);
                                }}>
                                    {
                                        panelmembers.map((val) => {
                                            return (
                                                <option value={val.full_name}>{val.full_name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <label>Group Name</label>
                                <select name='group_name' className='form-control' onChange={(e) => {
                                    setGroupName(e.target.value);
                                }}>
                                    {
                                        group.map((val) => {
                                            return (
                                                <option value={val.group_name}>{val.group_name}</option>
                                            )
                                        })
                                    }
                                </select><br />
                                <input type="submit" name="submit" value="Assign" className='btn btn-success form-control' />
                            </form>
                        </center>
                    </td>
                </tr>
            </table >
        </div >
    );
}

export default ViewPanelMembers;