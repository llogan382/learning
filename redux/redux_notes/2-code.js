import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

// Things like below will get complicated.
const initialState = { users: [
  {id: 1, name: "John"},
  {id: 2, name: "Sally"},
],
tasks: [
  {title: 'File TPS reports', completed: false},
  {title: 'File monthly budget', completed: false},
] };


/*

Here is the reducer.

As the object grows, this can quickly get complicated.

If this happens:
1. Do we need to change the shape of the stae?
2. Do we need to add more reducers?

Below, we split it into different reducers.

We are mapping the reducers to the shape of the tree.

Advice: Add as many as necessary, but as few as needed.

Also, the FLATTER the object, the easier it is to work with.
*/
const ADD_USER = "ADD_USER";
const ADD_TASK = "ADD_TASK";

const addTask = (title) => ({ type: ADD_TASK, payload: { title } });
const addUser = (name) => ({ type: ADD_USER, payload: { name } });

// this is how we make it simpler. Always start with the initial state.
const userReducer = (users = initialState.users, action) => {
  if (action.type === ADD_USER) {
    return [...users, action.payload];
  }

  return users;
};

const taskReducer = (tasks = initialState.tasks, action) => {
  if(action.type === ADD_TASK) {
    return [...tasks, action.payload];
  }
  return tasks;
}

const reducer = combineReducers({users: userReducer, tasks: taskReducer});

const store = createStore(reducer);

console.log(store.getState());
