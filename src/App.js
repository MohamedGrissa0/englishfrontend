import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar"
import Days from './Components/Days/Days';
import Content from './Components/Content/Content';
import Add from './Components/Add/Add';

function App() {

  return (
      <Router>
                  <Navbar />

        <Routes>
          <Route exact path="/" element={<Days />} />
          <Route exact path="/day/:id" element={<Content />} />
          <Route exact path="/add" element={<Add />} />


     

        </Routes>
      </Router>

  );
}

export default App;
