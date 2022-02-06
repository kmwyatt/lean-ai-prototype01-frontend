import React from "react";
import styled from "styled-components";
import { Inner } from "../util/Common";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AdminPageSideMenu from "./AdminPageSideMenu";
import AdminPageHome from "./Home/AdminPageHome";
import AdminPageMember from "./Member/AdminPageMember";
import AdminPageAssociate from "./Associate/AdminPageAssociate";
import AdminPageParticipate from "./Participate/AdminPageParticipate";
import AdminPageWorks from "./Works/AdminPageWorks";
import AdminPageExchange from "./Exchange/AdminPageExchange";

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

function AdminPage() {
  return (
    <Router>
      <Base>
        <Inner>
          <Left>
            <Route path="/" component={AdminPageSideMenu} />
          </Left>
          <Right>
            <Switch>
              <Route exact path="/" component={AdminPageHome} />
              <Route exact path="/works" component={AdminPageWorks} />
              <Route exact path="/member" component={AdminPageMember} />
              <Route exact path="/associate" component={AdminPageAssociate} />
              <Route
                exact
                path="/participate"
                component={AdminPageParticipate}
              />
              <Route exact path="/exchange" component={AdminPageExchange} />
            </Switch>
          </Right>
        </Inner>
      </Base>
    </Router>
  );
}

export default AdminPage;
