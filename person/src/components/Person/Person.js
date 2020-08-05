import React from 'react';

import './Person.css';

const Person = ({ id, name, age, clicked }) => {
  return (
    <div className="person" onClick={clicked}>
      <div className="personName">{name}</div>
      <div>Age: {age}</div>
    </div>
  )
}

export default Person;