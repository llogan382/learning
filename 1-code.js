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

// Functions that create actions to perform on the store
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

const subsciber = () => console.log('SUBSCRIBER', store.getState());

// Take the action. You no longer need to add "store.dispatch" to the action.
const actions = bindActionCreators({ increment, add }, store.dispatch);
actions.add(1000);
actions.increment();

// Compose allows you to add multiple middlewares. This works under the hood  in REACT.
const [dispatchIncrement, dispatchAdd] = [increment, add].map(fn => compose(store.dispatch, fn));

// Dispatch: Sends actions into the reducer to "do battle" with the current version of state. It returns the new state.
store.dispatch(increment());


console.log(store.getState());


