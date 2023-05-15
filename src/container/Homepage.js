import React from 'react';
import TitleBar from '../components/TitleBar';
import Biography from '../components/Biography';
import Projects from '../components/Projects';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Homepage = () => {
    return ( 
        <div>
        <Router>
            <h1>Portfolio</h1>
        <TitleBar/>
        <Routes>
          {/* <Route path="/" element={<Homepage/>}/> */}
          <Route path="/biography" element={<Biography/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
        </Router>
        </div>
     );
}
 
export default Homepage;