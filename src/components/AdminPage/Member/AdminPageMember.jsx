import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { memberList } from "../../../store/modules/admin";

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

function AdminPageMember(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(memberList()).then((res) => {
      console.log(res);
    });
  }, []);

  const userList = useSelector((state) => state.admin.list) || [];

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
              <th>상태</th>
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
                  <td>{user.role === 9 ? "관리자" : "작업자"}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Inner>
    </Base>
  );
}

export default AdminPageMember;
