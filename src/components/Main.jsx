import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IntroPage from "./IntroPage/IntroPage";
import LoginPage from "./LoginPage/LoginPage";

const Base = styled.section`
  padding-top: 60px;
  /* height: 1000px; */
  width: 100%;
`;

export default function Main() {
  return (
    <Base>
      <Router>
        <Switch>
          <Route exact path="/" component={IntroPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </Base>
  );
}
