import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import Empty from "../../util/Empty";

const Base = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: top;
`;

const Inner = styled.div`
  width: 100%;
  text-align: center;
`;

function AdminPageAssociate(props) {
  const [list, setList] = useState([]);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    axios.get("/api/admin/associatelist").then((res) => {
      setList(res.data);
    });
  }, [trigger]);

  const onClickHandler = (userId) => {
    let body = {
      id: userId,
    };
    axios.post("/api/admin/levelup", body).then((res) => {
      if (res.data.success) {
        alert("승인 완료");
        setTrigger(trigger + 1);
      } else {
        alert("승인 실패");
      }
    });
  };

  return (
    <Base>
      <Inner>
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
                      onClick={() => onClickHandler(user.id)}
                    >
                      승인
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {!list.length ? <Empty text="가입 신청이" /> : null}
      </Inner>
    </Base>
  );
}

export default AdminPageAssociate;
