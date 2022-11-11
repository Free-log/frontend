import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./stores";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { Background } from "@components";
import "@assets/css/font.css";
import "@assets/css/reset.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Background />
      <App />
    </BrowserRouter>
  </Provider>
);
