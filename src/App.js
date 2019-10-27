import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main.scss";

import Main from "./Main";
import DetailPage from "./DetailPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail">
          <DetailPage />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
