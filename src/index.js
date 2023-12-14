import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import * as Sentry from "@sentry/react";
import LogRocket from "logrocket";
import { v4 as uuidv4 } from "uuid";
import { BrowserTracing } from "@sentry/tracing";
import { Auth0Provider } from "@auth0/auth0-react";
import { v4 as uuidv4 } from "uuid";
require("dotenv").config();

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [
    new Sentry.Feedback({
      // Additional SDK configuration goes in here
      colorScheme: "light",
     }),
     new BrowserTracing(),
     new Sentry.Replay({
      // Additional SDK configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  beforeSend: (event) => {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({ eventId: event.event_id });
    }
    return event;
  },
});

LogRocket.init(process.env.REACT_APP_LOGROCKET);
LogRocket.identify(uuidv4());

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
