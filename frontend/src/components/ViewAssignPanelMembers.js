import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ViewAssignPanelMembers() {

    const [panelAndGroup, setPanelAndGroup] = useState([]);

    useEffect(() => {

        axios.get('https://research-tool-backend.herokuapp.com/groupassign')
            .then((res) => {
                setPanelAndGroup(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    return (
        <div className='container'>
            <center>
                <h2 className='mt-5 card'>Assigned panel members to groups</h2>
            </center>
            <div>
            <table className='table mt-5 table-striped table-bordered bg-light text-center' style={{ marginTop: '100px', marginBottom: '100px' }}>
                <thead>
                    <tr>
                        <th>Panel Member Name</th>
                        <th>Group Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        panelAndGroup.map((val) => {
                            return (
                                <tr>
                                    <td>{val.full_name}</td>
                                    <td>{val.group_name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default ViewAssignPanelMembers;