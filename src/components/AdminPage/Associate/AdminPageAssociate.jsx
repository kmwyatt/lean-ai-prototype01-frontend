import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { associateList } from "../../../store/modules/admin";

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(associateList()).then((res) => {
      console.log(res);
    });
  }, []);

  const userList = useSelector((state) => state.admin.list) || [];

  function onClickHandler(userId) {
    let body = {
      id: userId,
    };
    axios.post("/api/admin/levelup", body).then((res) => {
      if (res.data.success) {
        alert("승인 완료");
      } else {
        alert("승인 실패");
      }
    });
  }

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
            {userList.map((user) => {
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
      </Inner>
    </Base>
  );
}

export default AdminPageAssociate;
