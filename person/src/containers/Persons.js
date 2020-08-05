import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddPerson from '../components/AddPerson/AddPerson'
import Person from '../components/Person/Person'

class Persons extends Component {
  state = {
    persons: []
  }

  // personAddedHandler = () => {
  //   const newPerson = {
  //     id: Math.random(), // not realy unique but good enough here
  //     name: 'John',
  //     age: Math.floor(Math.random() * 40)
  //   }
  //   this.setState((prevState) => {
  //     return { persons: prevState.persons.concat(newPerson) }
  //   })
  // }

  personDeleteHandler = (id) => {
    this.setState((prevState) => {
      return { persons: prevState.persons.filter(person => id !== person.id) }
    })
  }

  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAdd} />
        {console.log(this.props.per)}
        {
          this.props.per.map(person => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              clicked={() => { this.props.onRemove(person.id) }}
            />
          ))
        }
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    per : state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
   
    onAdd: () => dispatch({ type: "ADD_PERSON", value: {
      id: Math.random(), // not realy unique but good enough here
      name: 'John',
      age: Math.floor(Math.random() * 40)
    } }),

    onRemove: (id) =>  dispatch({ type: "REMOVE_PERSON", value: id
   }),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);