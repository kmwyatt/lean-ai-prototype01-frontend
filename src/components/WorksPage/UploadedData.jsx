import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import moment from "moment";
import styled from "styled-components";
import Empty from "../util/Empty";
import DataInfo from "./DataInfo";
import { useSelector } from "react-redux";
import DataFeedback from "./DataFeedback";

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

function CreateProjectModal(props) {
  const userRole = useSelector((state) => state.user.userData.role);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          작업 상세보기
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DataInfo info={props.info} />
      </Modal.Body>
      {!props.info[0].feedback && userRole > 1 ? (
        <DataFeedback info={props.info} />
      ) : null}
    </Modal>
  );
}

function UploadedData(props) {
  const [list, setList] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    let body = {
      projectIndex: props.projectIndex,
    };
    axios.post("/api/work/uploaded", body).then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <Base>
      <Wrapper>
        <h4>업로드 된 작업 목록</h4>
      </Wrapper>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>작성자</th>
            <th>내용</th>
            <th>승인여부</th>
            <th>작성일자</th>
          </tr>
        </thead>
        <tbody>
          {list.map((work) => {
            return (
              <tr>
                <td>{work.index}</td>
                <td>{work.writerId}</td>
                <td>{work.text}</td>
                <td>
                  {work.feedback < 1
                    ? "-"
                    : work.feedback === 1
                    ? "승인"
                    : "반려"}
                </td>
                <td>{moment(work.date).format("YY-MM-DD")}</td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setModalShow(true)}
                  >
                    보기
                  </Button>
                </td>
                <CreateProjectModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  info={list}
                />
              </tr>
            );
          })}
        </tbody>
      </Table>
      {!list.length ? <Empty text="업로드 된 작업물이" /> : null}
    </Base>
  );
}

export default UploadedData;
