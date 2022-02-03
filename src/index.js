import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "./CryptoContext";
import './style/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <App/>
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById("root")
);