import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Booking from './components/pages/Booking';
import CoffeeBasics from './components/pages/CoffeeBasics';
import SignUp from './components/pages/SignUp';


function App() {
  return (

    <>
      <Router>

        <Navbar />
        <Routes>

          <Route path='/' exact element={<Home />} />
          <Route path='booking' component={<Booking />} />
          <Route path='coffee-basics' component={<CoffeeBasics />} />
          <Route path='sign-up' component={<SignUp />} />

        </Routes>




      </Router>
    </>




  );
}

export default App;