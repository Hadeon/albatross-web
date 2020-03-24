import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css';
import '../index.css';

const Home = () => {
  const isAuthenticated = useSelector(state => state.authReducer);
  
  console.log(isAuthenticated);

  return (
    <div>
      <div className="home-banner">
        <h1 className="header-large center white">Albatross</h1>
        <p className="center white">Who is headed where and when?</p>
      </div>
      <div className="main-container">
        <p>Albatross was made with the intent of making it easier to track trips for various groups of people. Whether for family, friends or business, Albatross lets you share your plans with who you want, when you want.</p>
      </div>
    </div>
  )
}

export default Home;