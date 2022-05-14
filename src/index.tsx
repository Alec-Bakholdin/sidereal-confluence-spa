import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import dark from "./assets/themes/dark";
import store from "./redux/store";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { StompSessionProvider } from "react-stomp-hooks";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <CookiesProvider>
        <StompSessionProvider url={`${process.env.REACT_APP_API_URL}/ws`}>
          <Provider store={store}>
            <CssBaseline />
            <App />
          </Provider>
        </StompSessionProvider>
      </CookiesProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
