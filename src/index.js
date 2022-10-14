import { Fragment } from "react";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>,
  rootElement
);

serviceWorkerRegistration.register();