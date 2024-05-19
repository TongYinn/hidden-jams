import React from 'react';

import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Home />
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
