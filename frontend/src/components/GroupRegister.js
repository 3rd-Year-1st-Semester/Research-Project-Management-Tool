import React from 'react';

function GroupRegister() {
    return (
        <div className='container mt-4 card'>

            <h2>Register Now</h2>

            <table className='table'>
                <tr style={{ width: "100px" }}>
                    <td style={{fontWeight:"bold"}}>Subject Name</td>
                    <td><input type="text" name="subject_name" id="subject_name" className='form-control-sm col-4' /></td>
                </tr>
                <tr style={{ width: "100px" }}>
                    <td style={{fontWeight:"bold"}}>Group Name</td>
                    <td><input type="text" name="group_name" id="group_name" className='form-control-sm col-4' /></td>
                </tr>
                <tr style={{ width: "100px" }}>
                    <td style={{fontWeight:"bold"}}>Academic Year</td>
                    <td><input type="text" name="academic_year" id="academic_year" className='form-control-sm col-4' /></td>
                </tr>
                <tr style={{ width: "100px" }}>
                    <td style={{fontWeight:"bold"}}>Semester</td>
                    <td><input type="text" name="semester" id="semester" className='form-control-sm col-4' /></td>
                </tr>
                <tr style={{ width: "100px" }}>
                    <td rowSpan="4" style={{fontWeight:"bold"}}>Members</td>
                    <td>
                        <tr style={{ margin: 'auto' }}>
                            <td>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 1 Reg No : <input type="text" name="reg_no_1" id="reg_no_1" className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 1 Name : <input type="text" name="name_1" id="name_1" className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 1 Contact : <input type="text" name="contact_1" id="contact_1" className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 1 Email : <input type="text" name="email_1" id="email_1" className='form-control' /></td>
                                </tr>
                            </td>
                            <td>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 2 Reg No : <input type="text" name="reg_no_2" id="reg_no_2" className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 2 Name : <input type="text" name="name_2" id="name_2" className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 2 Contact : <input type="text" name="contact_2" id="contact_2" className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 2 Email : <input type="text" name="email_2" id="email_2" className='form-control' /></td>
                                </tr>
                            </td>
                            <td>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 3 Reg No : <input type="text" name="reg_no_3" id="reg_no_3" className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 3 Name : <input type="text" name="name_3" id="name_3" className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 3 Contact : <input type="text" name="contact_3" id="contact_3" className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 3 Email : <input type="text" name="email_3" id="email_3" className='form-control' /></td>
                                </tr>
                            </td>
                            <td>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 4 Reg No : <input type="text" name="reg_no_4" id="reg_no_4" className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 4 Name : <input type="text" name="name_4" id="name_4" className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 4 Contact : <input type="text" name="contact_4" id="contact_4" className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:"bold"}}>Member 4 Email : <input type="text" name="email_4" id="email_4" className='form-control' /></td>
                                </tr>
                            </td>
                        </tr>
                    </td>
                </tr>
                <tr>
                    <td><button className='btn bg-primary text-light mt-3'>Register Now</button></td>
                </tr>
            </table>

        </div>
    );
}

export default GroupRegister;