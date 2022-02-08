import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { loginUser } from "../../store/modules/user";
import { withRouter } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  display: block;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-basis: 1;
  padding: 20px;
`;

function DataFeedback(props) {
  const [text, setText] = useState("");

  const onTextHandler = (event) => {
    setText(event.target.value);
  };

  const onOkHandler = (event) => {
    event.preventDefault();

    let body = {
      comment: text,
      index: props.info[0].index,
      feedback: 1,
    };

    axios.post("/api/work/feedback", body).then((res) => {
      console.log(res);
      if (res.data.success) {
        alert("피드백 성공");
        props.history.go(0);
      } else {
        alert("피드백 실패");
      }
    });
  };

  const onNoHandler = (event) => {
    event.preventDefault();

    let body = {
      comment: text,
      index: props.info[0].index,
      feedback: 2,
    };

    axios.post("/api/work/feedback", body).then((res) => {
      console.log(res);
      if (res.data.success) {
        alert("피드백 성공");
        props.history.go(0);
      } else {
        alert("피드백 실패");
      }
    });
  };

  return (
    <Form>
      <Wrapper>
        <Form.Control
          type="text"
          placeholder="Comment"
          value={text}
          onChange={onTextHandler}
        />
        <Button variant="success" type="submit" onClick={onOkHandler}>
          승인
        </Button>
        <Button variant="danger" type="submit" onClick={onNoHandler}>
          반려
        </Button>
      </Wrapper>
    </Form>
  );
}

export default withRouter(DataFeedback);
