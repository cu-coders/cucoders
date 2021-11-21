import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import Honeybadger from '@honeybadger-io/js'
import ErrorBoundary from '@honeybadger-io/react'

Modal.setAppElement("#root");
Honeybadger.configure({
  apiKey: 'hbp_krEfC2Xc1ZovJBRIhHejq6WU3zFRNj2iu6yW',
  environment: 'production'
})

ReactDOM.render(
  <ErrorBoundary honeybadger={Honeybadger}>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
)
