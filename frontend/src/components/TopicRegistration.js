import React, { useState } from 'react';
import axios from 'axios';

export default function TopicRegistration() {
 

    const [studentId, setStudentId] = useState("");
    const [fullName,setFullName] = useState("");
    const [groupName, setGroupName] = useState("");
    const [faculty, setFaculty] = useState("");
    const [academicYear, setAcademicYear] = useState("");
    const [semester, setSemester] = useState("");
    const [subjectName, setSubjectName] = useState("");
    const [researchName,setResearchName] = useState("");
    const [contact_number, setContact_number] = useState("");
    const [email, setEmail] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newTopicRegistration = {
            studentId,
            fullName,
            groupName,
            faculty,
            academicYear,
            semester,
            subjectName,
            researchName,
            contact_number,
            email,
        };
        console.log(newTopicRegistration);
        axios.post("http://localhost:7000/TopicRegistration/register",newTopicRegistration).then(() => {
            alert("Topic Registered Successfully!!!");
           

            
        }).catch((err) => {
            alert(err)
        });



    }





    return (
        <div class="card">
            <br/><br/>
            <div className="heading" >
                <h1>Topic Registration</h1>
            </div>
            <br></br>
             
            <div className="container">
                <form onSubmit={sendData}>

                <div class="form-group">
                        <label for="subject_id">Student ID:</label>
                        <input type="text" class="form-control" required  id="subject_id" placeholder="Enter Subject ID"
                            onChange={(e) => {
                                setStudentId(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="fullName">Full Name of the Student:</label>
                        <input type="text" class="form-control" required id="fullName" placeholder="Enter Full Name of the Student"
                            onChange={(e) => {
                                setFullName(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="groupName">Group Name:</label>
                        <input type="text" class="form-control" required id="groupName" placeholder="Enter Group Name"
                            onChange={(e) => {
                                setGroupName(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="facultyName">Faculty Name:</label>
                        <input type="text" class="form-control" required id="facultyName" placeholder="Enter Faculty Name"
                            onChange={(e) => {
                                setFaculty(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="academicYear">Academic Year:</label>
                        <input type="text" class="form-control" required id="academicYear" placeholder="Enter Academic Year"
                            onChange={(e) => {
                                setAcademicYear(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="semester">Semester:</label>
                        <input type="text" class="form-control" required id="semester" placeholder="Enter Semester"
                            onChange={(e) => {
                                setSemester(e.target.value);
                            }} />

                    </div>




                    <div class="form-group">
                        <label for="subject_name">Subject Name:</label>
                        <input type="text" class="form-control" required id="subject_name" placeholder="Enter Subject Name"
                            onChange={(e) => {
                                setSubjectName(e.target.value);
                            }} />

                    </div>

                    <div class="form-group">
                        <label for="reserach_name">Research Name:</label>
                        <input type="text" class="form-control" required id="reserach_name" placeholder="Enter Research Name"
                            onChange={(e) => {
                                setResearchName(e.target.value);
                            }}
                        />

                    </div>

                    <div class="form-group">
                        <label for="contact_number">Contact No:</label>
                        <input type="text " onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                            required  class="form-control" id="contact_number " placeholder="Enter Contact No"
                            onChange={(e) => {
                                setContact_number(e.target.value);
                            }}
                        />

                    </div>
                    <div class="form-group">
                        <label for="email">Email Address:</label>
                        <input type="email " class="form-control" id="email " required placeholder="Enter Email Adress"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}

                        />

                    </div>

                                    

                    <button type="submit" class="btn btn-primary" >Submit</button>
                </form>
                <br/><br/>
            </div>
        </div>
    )
}  
