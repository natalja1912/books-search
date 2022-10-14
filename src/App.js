import { Provider } from "react-redux";
import { store } from "./redux/configureStore";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Home, DetailedBookView } from "./components";
import "./styles.css";

export default function App() {
  window.onerror((err) => console.log(err));
  
  return (
    <div className="page">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/book/:id" component={DetailedBookView} />
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
