import React from 'react';
import '../index.css';
import './GroupList.css';

const GroupList = () => {

  return (
    <div className="main-container">
      <div className="groups-header">
        <h1>Group List</h1>
        <div className="create-group-button">
          <h2>Create New Group</h2>
        </div>
      </div>
      <p>Group invites. (Invites associated with email?)</p>
      <p>For each group associated to the userid, render a groupDetails component.</p>
    </div>
  )
}

export default GroupList;