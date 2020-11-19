import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";

import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
