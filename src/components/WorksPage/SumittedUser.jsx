import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import styled from "styled-components";
import Empty from "../util/Empty";

const Base = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #cccccc;
  padding-top: 5px;
`;

function SubmittedUser(props) {
  const [list, setList] = useState([]);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    let body = {
      projectIndex: props.projectIndex,
    };
    axios.post("/api/project/submitteduser", body).then((res) => {
      setList(res.data);
    });
  }, [trigger]);

  const onClickHandler = (userIndex) => {
    let body = {
      userIndex: userIndex,
      projectIndex: props.projectIndex,
    };
    console.log(body);
    axios.post("/api/project/userjoin", body).then((res) => {
      if (res.data.success) {
        alert("신청 완료");
        setTrigger(trigger + 1);
      } else {
        alert("신청 실패");
      }
    });
  };

  return (
    <Base>
      <Wrapper>
        <h4>참여 신청한 유저 목록</h4>
      </Wrapper>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>휴대폰 번호</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {list.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => onClickHandler(user.index)}
                  >
                    승인
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {!list.length ? <Empty text="참여 신청한 유저가" /> : null}
    </Base>
  );
}

export default SubmittedUser;
