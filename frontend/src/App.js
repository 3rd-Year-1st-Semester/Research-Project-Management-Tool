import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarkingScheme from './components/MarkingScheme';


export function App() {

  return (


    <div>

      <Router>

        
        <Routes>
        
          <Route path="/marking" element={<MarkingScheme />} />
          
          

        </Routes>
        </Router>
    </div>
  )

}

