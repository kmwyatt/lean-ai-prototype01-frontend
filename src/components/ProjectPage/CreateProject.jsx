import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  margin: auto;
  max-width: 100%;
  max-height: 200px;
`;

function CreateProject(props) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [cost, setCost] = useState(0);
  const [file, setFile] = useState(undefined);
  const [image, setImage] = useState(undefined);

  const saveFile = (event) => {
    setFile(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const onNameHandler = (event) => {
    setName(event.target.value);
  };

  const onContentHandler = (event) => {
    setContent(event.target.value);
  };

  const onLinkHandler = (event) => {
    setLink(event.target.value);
  };

  const onCostHandler = (event) => {
    setCost(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (
      name === "" ||
      content === "" ||
      link === "" ||
      file === undefined ||
      cost === 0
    ) {
      return alert("필수 사항을 입력하지 않았습니다.");
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);
    formData.append("link", link);
    formData.append("cost", cost);
    formData.append("file", file);

    console.log(...formData);

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    axios.post("/api/admin/createproject", formData, config).then((res) => {
      console.log(res);
      if (res.data.success) {
        alert("프로젝트가 생성되었습니다.");
        props.history.go(0);
      } else {
        alert("프로젝트를 생성하지 못했습니다.");
      }
    });

    // console.log(body);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>프로젝트명</Form.Label>
        <Form.Control type="text" value={name} onChange={onNameHandler} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>상세 내용</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={content}
          onChange={onContentHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>작업 가이드라인 링크</Form.Label>
        <Form.Control type="text" value={link} onChange={onLinkHandler} />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Image src={image} />
        <Form.Label>대표 이미지</Form.Label>
        <Form.Control type="file" onChange={saveFile} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>보상 단가</Form.Label>
        <Form.Control type="number" value={cost} onChange={onCostHandler} />
      </Form.Group>
      <Button variant="primary" type="submit">
        생성
      </Button>
    </Form>
  );
}

export default withRouter(CreateProject);
