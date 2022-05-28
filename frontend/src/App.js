import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllStudents from './components/AllStudents';
import AllUsers from "./components/AllUsers";
import StudentDashboard from "./components/StudentDashboard";
import StudentLogin from "./components/StudentLogin";
import MarkingScheme from './components/MarkingScheme';
import ViewMarking from "./components/ViewMarking";

export function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/login" element={<StudentLogin />}></Route>
                    <Route path="/allstudents" element={<AllStudents />}></Route>
                    <Route path="/allusers" element={<AllUsers />}></Route>
                    <Route path="/student/dashboard" element={<StudentDashboard/>}></Route>
                    <Route path="/marking" element={<MarkingScheme />} />
                    <Route path="/markingview" element={<ViewMarking />} />

                </Routes>
            </Router>
        </div>
    );
}