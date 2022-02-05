import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function LogOutBtn(props) {
  const logOn = useSelector((state) => state.user.userData.isAuth);
  const onLogoutHandler = () => {
    axios.get("/api/users/logout").then((res) => {
      if (res.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃을 하는데 실패했습니다.");
      }
    });
  };
  if (logOn) {
    return (
      <>
        &nbsp;
        <Button variant="secondary" size="sm" onClick={onLogoutHandler}>
          로그아웃
        </Button>
      </>
    );
  }
  return <></>;
}

export default withRouter(LogOutBtn);
