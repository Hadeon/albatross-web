import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../_actions/authActions';
import './Navbar.css';

// Group shouldn't appear if not logged in
// Validation wrapping this and the specific groups to bounce back to Login if not logged in

// Group path without params should head to a list of groups
// Group with params shows details of that group
  // Possible to not even require the params? (Saves the trouble of multiple pages and streamlines user experience a little more)
    // Display scrollable list of groups on left with main body showing the details
      // Updates the state with the group details on selection

function Navbar() {
  const isAuthenticated = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  return (
    <div className="navbar-container">
      <Link to="/" style={{ textDecoration: 'none' }}><h2>Home</h2></Link>

      {isAuthenticated ? 
        (
          <Fragment>
            <Link to="/groups" style={{ textDecoration: 'none' }}><h2>Groups</h2></Link>
            <Link to="/group/2" style={{ textDecoration: 'none' }}><h2>Group</h2></Link>
            <Link to="/account" style={{ textDecoration: 'none' }}><h2>Account</h2></Link>
            <Link to="/" style={{ textDecoration: 'none' }} onClick={() => dispatch(logout())}><h2>Logout</h2></Link>
          </Fragment>
        ) : 
        <Link to="/login" style={{ textDecoration: 'none' }}><h2>Login</h2></Link>
      }
    </div>
  )
}

export default Navbar;