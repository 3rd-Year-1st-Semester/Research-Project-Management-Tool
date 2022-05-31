import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllStudents from './components/AllStudents';
import AllUsers from "./components/AllUsers";
import StudentNavbar from "./components/StudentNavbar";
import StudentDashboard from "./components/StudentDashboard";
import StudentLogin from "./components/StudentLogin";
import UserDashboard from "./components/UserDashboard";
import UserLogin from "./components/UserLogin";
import Navbar from "./components/NavBar";
import UserNavbar from "./components/UserNavBar";

export function App() {
    return (
        <div>
            {
                localStorage.std_token ? <StudentNavbar/> : <Navbar/> 
            }

            <Router>
                <Routes>
                    <Route path="/login" element={<StudentLogin />}></Route>
                    <Route path="/allstudents" element={<AllStudents />}></Route>
                    <Route path="/allusers" element={<AllUsers />}></Route>


                    <Route path="/dashboard" element={<StudentDashboard />}></Route>
                    <Route path="/user/login" element={<UserLogin/>}></Route>
                    <Route path="/user/dashboard" element={<UserDashboard />}></Route>

                    <Route path="/student/dashboard" element={<StudentDashboard/>}></Route>
                   
                </Routes>
            </Router>
        </div>
    );
}