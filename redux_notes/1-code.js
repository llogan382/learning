import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators
} from "redux";

const initialState = {value: 0};

const incrementAction = {type: "INCREMENT"};

const INCREMENT = "INCREMENT";
const ADD = "ADD";

const increment = () => ({type: INCREMENT});
const add = (amount) => ({ type: ADD, payload: amount });


// console.log(state);
const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + 1 };
    return {state};
  }
  if(action.type === ADD) {
    return { value: state.value + action.payload }}

  return state;
};

// Two things go in: the current state, and the action. It reutrns the new state.
const store = createStore(reducer);

store.dispatch(increment());

console.log(store.getState());
