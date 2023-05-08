import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import allReducers from "./reducers/index.js";
import { createStore } from "redux";
import { Provider } from "react-redux";

// STORE - holds all data, one big state - globalized state

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // ACTION - describes what we want to do
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };
// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// // REDUCER - describes how action transforms state into the next state
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return;
//   }
// };

// let store = createStore(counter);

// //display in the console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH - execute action to the reducer
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
