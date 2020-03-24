import React from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';

const Group = () => {
  let { id } = useParams();
  return (
    <div className="main-container">
      <h1>Group</h1>
      <p>{id}</p>
    </div>
  )
}

export default Group;