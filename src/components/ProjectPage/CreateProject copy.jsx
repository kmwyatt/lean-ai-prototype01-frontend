import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  margin: auto;
  max-width: 100%;
  max-height: 200px;
`;

function CreateProject() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [cost, setCost] = useState(0);

  const [file, setFile] = useState(undefined);
  const saveFile = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
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

    let body = {
      name: name,
      content: content,
      link: link,
      file: file,
      cost: cost,
    };
    console.log(body);
    axios.post("/api/admin/createproject", body).then((res) => res.data);

    console.log(body);
  };

  return (
    <Form encType="multipart/form-data">
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
        <Image src={file} />
        <Form.Label>대표 이미지</Form.Label>
        <Form.Control type="file" onChange={saveFile} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>보상 단가</Form.Label>
        <Form.Control type="number" value={cost} onChange={onCostHandler} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={onSubmitHandler}>
        생성
      </Button>
    </Form>
  );
}

export default CreateProject;
