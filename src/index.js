import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { Auth0Provider } from "@auth0/auth0-react";
require("dotenv").config();

Sentry.init({
  dsn: "https://51d9b9edbd9142c1990573a05246f4ba@o1258362.ingest.sentry.io/4504221113122816",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

Modal.setAppElement("#root");

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
