import React from "react";
import styled from "styled-components";
import { Inner } from "../util/Common";
import MyPageSideMenu from "./MyPageSideMenu";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MyPageHome from "./Home/MyPageHome";
import MyPageProfile from "./Profile/MyPageProfile";
import MyPageHistory from "./History/MyPageHistory";
import MyPageExchange from "./Exchange/MyPageExchange";

const Base = styled.div`
  display: flex;
  padding-top: 100px;
  padding-bottom: 40px;
  min-height: 800px;
`;

const Left = styled.div`
  width: 250px;
`;

const Right = styled.div`
  margin-left: 30px;
  width: 100%;
`;

function MyPage() {
  return (
    <Router>
      <Base>
        <Inner>
          <Left>
            <Route path="/" component={MyPageSideMenu} />
          </Left>
          <Right>
            <Switch>
              <Route exact path="/" component={MyPageHome} />
              <Route exact path="/profile" component={MyPageProfile} />
              <Route exact path="/history" component={MyPageHistory} />
              <Route exact path="/exchange" component={MyPageExchange} />
            </Switch>
          </Right>
        </Inner>
      </Base>
    </Router>
  );
}

export default MyPage;
