import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GroupUpdate() {

    const { id } = useParams();

    const [group, setGroup] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:7000/group/${id}`)
            .then((res) => {
                setGroup(res.data);
                console.log(res.data);
            })
    }, [])


    function updateGroup(event) {
        event.preventDefault();
        axios.put(`http://localhost:7000/group/update/${id}`, group).then(() => {
            alert("Group update Successfully");
        }).catch((err) => {
            console.log(err);
        })
        window.location.href = "/user/allgroups";
    }

    const handleChange = event => {
         const { name, value } = event.target;
         setGroup({ ...group, [name]: value });
    }

    return (
        <div className="container mt-4 card">
            <h2>Group Update Page</h2>

            <form onSubmit={updateGroup}>
                <table className='table'>
                    <tr style={{ width: "100px" }}>
                        <td style={{ fontWeight: "bold" }}>Subject Name</td>
                        <td><input type="text" name="subject_name" id="subject_name" value={group.subject_name} className='form-control-sm col-4' onChange={handleChange}/></td>
                    </tr>
                    <tr style={{ width: "100px" }}>
                        <td style={{ fontWeight: "bold" }}>Group Name</td>
                        <td><input type="text" name="group_name" id="group_name" value={group.group_name} className='form-control-sm col-4' onChange={handleChange}/></td>
                    </tr>
                    <tr style={{ width: "100px" }}>
                        <td style={{ fontWeight: "bold" }}>Academic Year</td>
                        <td><input type="text" name="academic_year" id="academic_year" value={group.academic_year} className='form-control-sm col-4' onChange={handleChange}/></td>
                    </tr>
                    <tr style={{ width: "100px" }}>
                        <td style={{ fontWeight: "bold" }}>Semester</td>
                        <td><input type="text" name="semester" id="semester" value={group.semester} className='form-control-sm col-4' onChange={handleChange}/></td>
                    </tr>
                    <tr style={{ width: "100px", marginTop: "20px" }}>
                        <td rowSpan="4" style={{ fontWeight: "bold" }}>Members</td>
                        <td>
                            <tr>
                                <td className='mt-3'>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 1 Reg No : <input type="text" name="student_1_reg" id="student_1_reg" value={group.student_1_reg} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 1 Name : <input type="text" name="student_1_name" id="student_1_name" value={group.student_1_name} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 1 Contact : <input type="text" name="student_1_contact" id="student_1_contact" value={group.student_1_contact} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 1 Email : <input type="email" name="student_1_email" id="student_1_email" value={group.student_1_email} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                </td>
                                <td>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 2 Reg No : <input type="text" name="student_2_reg" id="student_2_reg"  value={group.student_2_reg} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 2 Name : <input type="text" name="student_2_name" id="student_2_name" value={group.student_2_name} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 2 Contact : <input type="text" name="student_2_contact" id="student_2_contact" value={group.student_2_contact} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 2 Email : <input type="email" name="student_2_email" id="student_2_email" value={group.student_2_email} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                </td>
                                <td>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 3 Reg No : <input type="text" name="student_3_reg" id="student_3_reg" value={group.student_3_reg} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 3 Name : <input type="text" name="student_3_name" id="student_3_name" value={group.student_3_name} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 3 Contact : <input type="text" name="student_3_contact" id="student_3_contact" value={group.student_3_contact} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 3 Email : <input type="email" name="student_3_email" id="student_3_email" value={group.student_3_email} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                </td>
                                <td>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 4 Reg No : <input type="text" name="student_4_reg" id="student_4_reg" value={group.student_4_reg} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 4 Name : <input type="text" name="student_4_name" id="student_4_name" value={group.student_4_name} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 4 Contact : <input type="text" name="student_4_contact" id="student_4_contact" value={group.student_4_contact} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>Member 4 Email : <input type="email" name="student_4_email" id="student_4_email" value={group.student_4_email} className='form-control' required onChange={handleChange}/></td>
                                    </tr>
                                </td>
                                
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="submit" name="submit" value="Update Now" className='btn bg-success text-light mt-3'/></td>
                    </tr>
                </table>
            </form>

        </div>
    );
}

export default GroupUpdate;