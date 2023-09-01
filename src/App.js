import React from 'react';

import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
