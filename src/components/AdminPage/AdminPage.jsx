import React from "react";
import styled from "styled-components";
import { Inner } from "../util/Common";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
            <AdminPageSideMenu />
          </Left>
          <Right>
            <Switch>
              <Route exact path="/admin/" component={AdminPageHome} />
              <Route exact path="/admin/works" component={AdminPageWorks} />
              <Route exact path="/admin/member" component={AdminPageMember} />
              <Route
                exact
                path="/admin/associate"
                component={AdminPageAssociate}
              />
              <Route
                exact
                path="/admin/participate"
                component={AdminPageParticipate}
              />
              <Route
                exact
                path="/admin/exchange"
                component={AdminPageExchange}
              />
            </Switch>
          </Right>
        </Inner>
      </Base>
    </Router>
  );
}

export default AdminPage;
