import React from "react";
import ReactDOM from "react-dom";
import Header from "nav/Header";
import useStore from "host/store";

import "./index.scss";

const App = () => {
  const { count, increment } = useStore();
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="text-sm">Name: host</div>
      <p className="text-center text-sm">You clicked {count} times</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
