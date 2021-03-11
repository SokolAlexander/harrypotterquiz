import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Main from "./Main";
import { routeParams } from '../constants';
import NotFoundPage from "./NotFoundPage";
import Home from "./Home";
import Start from "./Start";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/start">
        <Start />
      </Route>
      <Route path="/quest/:questId">
        <Main />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
);
