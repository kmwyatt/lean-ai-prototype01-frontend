import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
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

function AdminPageMember(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("/api/admin/memberlist").then((res) => {
      setList(res.data);
    });
  }, []);

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
            {list.map((user) => {
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
        {!list.length ? <Empty text="회원 정보가" /> : null}
      </Inner>
    </Base>
  );
}

export default AdminPageMember;
