import React from "react";
import { Button, Card } from "react-bootstrap";
import moment from "moment";

function DataInfo(props) {
  console.log(props.info);
  return (
    <Card
      style={{
        flexDirection: "row",
        overflow: "hidden",
        marginBottom: "40px",
      }}
    >
      <Card.Body>
        <Card.Title>작성자 {props.info[0].writerId}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          작성일자 {moment(props.info[0].date).format("YYYY년 MM월 DD일 HH:MM")}
        </Card.Subtitle>
        <Card.Text>{props.info[0].text}</Card.Text>
        <Button
          href={`http://localhost:4000/img/${props.info[0].file}`}
          target="_blank"
        >
          파일 보기
        </Button>
        {props.info[0].feedback ? (
          <>
            <hr />
            <Card.Title>
              {props.info[0].feedback === 1 ? "승인" : "반려"}
            </Card.Title>
            <Card.Text>{props.info[0].comment}</Card.Text>
          </>
        ) : null}
      </Card.Body>
    </Card>
  );
}

export default DataInfo;
