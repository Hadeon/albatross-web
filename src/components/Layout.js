import React, { Fragment } from 'react'
import Navbar from './Navbar';
import './Layout.css';

function Layout(props) {
  return (
    <Fragment>
      <Navbar/>
      <div className="route-body">
        {props.children}
      </div>
    </Fragment>
  )
}

export default Layout;