import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarkingScheme from './components/MarkingScheme';


const App = () => {

  return (


    <div className='App'>

      <Router>

        
        <Routes>
        
          <Route path="/marking" element={<MarkingScheme />} />
          
          

        </Routes>
        </Router>
    </div>
  )

}
export default App;
