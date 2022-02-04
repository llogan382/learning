import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

const reducer = state => state;

/**
 * The only required argument is the reducer.
 * an enhancer is basically if we wanted to add additional
 * functionality to a Redux store. This is a place where we can
 * pass in a function which will get an instance of createStore,
 * allow us to do whatever we want and then pass all the arguments into it.
 *
 * So, it processes the reducer, does some "magic" on it, and then updates the store.
 *
 * We want an enhancer that processes all performance in redux. So, take a measurement, log it, run reducer, log it, and compare.
 */



const logEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  // Do stuff like wrap the reducer in a higher-order function.
  const reducerWithConsoleLogs = (previousState, action) => {
    const nextState = reducer(previousState, action);
    console.log({ action, previousState, nextState });
    return nextState;
  };

  return createStore(reducerWithConsoleLogs, initialState, enhancer);
};


const monitorMiddleware = (store) => (next) => (action) => {
  const start = performance.now();
  next(action);
  const end = performance.now();
  const diff = round(end - start);

  console.log("reducer process time:", diff);
};


const store = createStore(reducer, monitorMiddleware);


store.dispatch({type: "hello"});
