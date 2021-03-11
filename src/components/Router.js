import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Main from "./Main";
import { routeParams } from '../constants';
import NotFoundPage from "./NotFoundPage";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to={`/${routeParams[0]}`} />
      </Route>
      <Route path="/:questId">
        <Main />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
);
