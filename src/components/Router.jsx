import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import Trip from "./Trip";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/trip" component={Trip} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
