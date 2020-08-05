import React from 'react';

import './AddPerson.css';

const AddPerson = ({ personAdded }) => {
  return (
    <>
      <h2>1. Turn this app into one which does NOT use local state (in component) but instead uses Redux</h2>
      <button onClick={personAdded}><span>Add Person </span></button>
    </>
  )
}

export default AddPerson;