import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllStudents from './components/AllStudents';

export function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/allstudents" element={<AllStudents />}></Route>
                </Routes>
            </Router>
        </div>
    );
}