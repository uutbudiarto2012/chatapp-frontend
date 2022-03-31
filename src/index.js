import React from "react";
import ReactDOM from "react-dom/client";
import ReactPwa from "react-pwa-app";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import store from "./redux/store";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <ReactPwa
    // test
    config={{
      swUrl: "/service-worker.js",
      onUpdate: (reg) => {
        console.log(reg);
      },
      onSuccess: (reg) => {
        console.log(reg);
      },
      onError: (reg) => {
        console.log(reg);
      },
      onPrompt: (e) => {
        if (e.outcome === "accepted") {
          localStorage.setItem("isInstalledStayonland", "INSTALLED");
        }
        if (e.outcome === "dismissed") {
          console.log("user click on install and refuse");
        }
      },
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ReactPwa>
);
