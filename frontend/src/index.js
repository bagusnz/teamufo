import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { populateDb } from "services/populateDb";

populateDb()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
