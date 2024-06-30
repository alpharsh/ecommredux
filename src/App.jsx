import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from "./appStore";
import HomePage from "./components/HomePage";
import CardDetails from "./components/CardDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CardDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
