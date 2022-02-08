import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

function UploadData(props) {
  const userIndex = useSelector((state) => state.user.userData.index);
  const userId = useSelector((state) => state.user.userData.id);
  const [text, setText] = useState("");
  const [file, setFile] = useState(undefined);

  const saveFile = (event) => {
    setFile(event.target.files[0]);
  };

  const onTextHandler = (event) => {
    setText(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (text === "" || file === undefined) {
      return alert("필수 사항을 입력하지 않았습니다.");
    }
    const formData = new FormData();
    formData.append("text", text);
    formData.append("file", file);
    formData.append("project", props.projectIndex);
    formData.append("writerIndex", userIndex);
    formData.append("writerId", userId);

    console.log(...formData);

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    axios.post("/api/work/uploadwork", formData, config).then((res) => {
      console.log(res);
      if (res.data.success) {
        alert("업로드 성공");
        props.history.go(0);
      } else {
        alert("업로드 실패");
      }
    });

    // console.log(body);
  };

  return (
    <Card
      style={{
        padding: "20px",
        marginBottom: "40px",
      }}
    >
      <Card.Title>작업물 업로드</Card.Title>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>설명</Form.Label>
          <Form.Control type="text" value={text} onChange={onTextHandler} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>파일</Form.Label>
          <Form.Control type="file" onChange={saveFile} />
        </Form.Group>
        <Button variant="primary" type="submit">
          업로드
        </Button>
      </Form>
    </Card>
  );
}

export default withRouter(UploadData);
