import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  /*  function tick(){
    const element =(
      <div>
        <h1>Rrrrrrendering an element in the DOM</h1>
        <h2>It is {new Date().toLocaleDateString()}</h2>
      </div>
    );
    root.render(element)
  } */
);
if (module.hot) {
  module.hot.accept();
}
//setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
