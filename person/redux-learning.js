const redux = require('redux');
const createStore = redux.createStore;

const initializeState = {
  counter: 0
}

// Reducers
const rootReducer = (state = initializeState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state, counter: state.counter + 1
    }
  }

  if (action.type === "ADD_COUNTER") {
    return {
      ...state, counter: state.counter + action.value
    }
  }

  return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscriber
store.subscribe(() => { console.log("[Subscribe]", store.getState()) });

// Dispatch Action
store.dispatch({ type: "INC_COUNTER" });
console.log(store.getState());
store.dispatch({ type: "ADD_COUNTER", value: 5 });
console.log(store.getState());

