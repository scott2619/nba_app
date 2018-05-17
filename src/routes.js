import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/home/home";
import Layout from "./hoc/layout/layout";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;