import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ViewAssignPanelMembers() {

    const [panelAndGroup, setPanelAndGroup] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:7000/groupassign')
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
            <table className='table mt-5'>
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
    );
}

export default ViewAssignPanelMembers;