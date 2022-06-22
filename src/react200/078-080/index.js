import React from "react";
import ReactDOM from "react-dom/client";
// import "./App.css";
import App from "./App";
import { createStore } from "redux";
import reducers from "./reducers";
import "bootstrap/dist/css/bootstrap.css";

const store = createStore(reducers);
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const listener = () => {
  root.render(<App store={store} />);
};
store.subscribe(listener);
listener();

// const rootElement = document.getElementById('root');
// const root = ReactDOM.createRoot(rootElement);

// root.render(
// <React.StrictMode>
// <App/>
// </React.StrictMode>
// );
