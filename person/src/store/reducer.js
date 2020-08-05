const intializeState = {
    persons: []
}

const rootReducer = (state = intializeState,action) => {
    console.log(state,action);
  if (action.type === 'ADD_PERSON') {
    return {
      ...state, persons: state.persons.concat(action.value)
    };
  }
  if (action.type === 'REMOVE_PERSON') {
    return {
      ...state, persons: state.persons.filter(person =>  action.value !== person.id)
    };
  }
  
  return state

}
export default rootReducer
