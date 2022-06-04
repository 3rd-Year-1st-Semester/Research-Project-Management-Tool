import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllStudents from './components/AllStudents';
import AllUsers from "./components/AllUsers";
import StudentNavbar from "./components/StudentNavbar";
import StudentDashboard from "./components/StudentDashboard";
import StudentLogin from "./components/StudentLogin";
import MarkingScheme from './components/MarkingScheme';
import ViewMarking from "./components/ViewMarking";
import UpdateMarkingScheme from "./components/UpdateMarkingScheme";
import StudentMarking from "./components/StudentMarking";
import UserDashboard from "./components/UserDashboard";
import UserLogin from "./components/UserLogin";
import Navbar from "./components/NavBar";
import UserNavbar from "./components/UserNavBar";

import MarkingScheme from './components/MarkingScheme';
import ViewMarking from "./components/ViewMarking";
import AllGroups from "./components/AllGroups";
import GroupRegister from "./components/GroupRegister";
import GroupUpdate from "./components/GroupUpdate";
import InsertPanelMember from "./components/InsertPanelMember";
import ViewPanelMembers from "./components/ViewPanelMembers";
import ViewAssignPanelMembers from "./components/ViewAssignPanelMembers";

import FileUpload from './components/FileUpload';
import FileStudentView from './components/FileStudentView';
import StudentFileUpload from './components/StudentFileUpload';
import FileAdminView from './components/SubmissionView';
import Footer from "./components/Footer";
import StudentRegister from "./components/StudentRegister";
 

import LandingPage from "./components/LandingPage";

//ashan
import TopicRegistration from './components/TopicRegistration';
import TopicView from './components/TopicView';
import TopicViewSuper from './components/TopicViewSuper';
import TopicUpdate from './components/TopicUpdate';
import TopicResultSend from './components/TopicResultSend';
import ApprovedTopics from './components/ApprovedTopics';
import RejectedTopics from './components/RejectedTopics';
import TopicResultSend2 from './components/TopicResultSend2';
import TopicStatus from './components/TopicStatus';


export function App() {
    return (
        <div>
            {
                localStorage.std_token ? <StudentNavbar /> : <Navbar />
            }

            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/login" element={<StudentLogin />}></Route>
                    <Route path="/register" element={<StudentRegister />}></Route>
                    <Route path="/allstudents" element={<AllStudents />}></Route>
                    <Route path="/allusers" element={<AllUsers />}></Route>
                    <Route path="/dashboard" element={<StudentDashboard />}></Route>
                    <Route path="/user/login" element={<UserLogin />}></Route>

                    <Route path="/user/dashboard" element={<UserDashboard />}></Route>

                    <Route path="/student/dashboard" element={<StudentDashboard />}></Route>

                    <Route path="/student/dashboard" element={<StudentDashboard />}></Route>
                    <Route path="/user/allgroups" element={<AllGroups />}></Route>
                    <Route path="/groupregister" element={<GroupRegister />}></Route>
                    <Route path="/student/dashboard" element={<StudentDashboard />}></Route>
                    <Route path="/user/groupupdate/:id" element={<GroupUpdate />}></Route>
                    <Route path="/user/insertpanelmember" element={<InsertPanelMember />} />
                    <Route path="/user/viewpanelmembers" element={<ViewPanelMembers />} />
                    <Route path="/user/viewassignpanelmembers" element={<ViewAssignPanelMembers />} />

                    <Route path="/marking" element={<MarkingScheme />} />
                    <Route path="/markingview" element={<ViewMarking />} />
                    <Route path="/markingupdate/:id" element={<UpdateMarkingScheme />} />
                    <Route path="/markingstudent" element={<StudentMarking />} />

                    <Route path="/admin/upload" element={<FileUpload />} />
                    <Route path="/students/filesdownload" element={<FileStudentView />} />
                    <Route path="/students/submission" element={<StudentFileUpload />} />
                    <Route path="/admin/Submitfiles" element={<FileAdminView />} />

                    <Route path='/topicregister'   element={<TopicRegistration/>} > </Route>
                    <Route path='/topicview'   element={<TopicView/>} > </Route>
                    <Route path='/topicviewsuper'   element={<TopicViewSuper/>} > </Route>
                    <Route path='/updatetopic/:id'   element={<TopicUpdate/>} > </Route>
                    <Route path='/topicresult/:id'   element={<TopicResultSend/>} > </Route>
                    <Route path='/approvedtopic'   element={<ApprovedTopics/>} > </Route>
                    <Route path='/rejectedtopic'   element={<RejectedTopics/>} > </Route>
                    <Route path='/topicresult2/:id'   element={<TopicResultSend2/>} > </Route>
                    <Route path='/topicstatus'   element={<TopicStatus/>} > </Route>



                </Routes>
                <Footer />
            </Router>
        </div>
    );
}