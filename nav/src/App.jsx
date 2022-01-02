import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import { CounterProvider } from "host/store";

import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: nav</div>
  </div>
);
ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.getElementById("app")
);
