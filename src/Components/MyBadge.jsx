import { Container, Row, Badge } from "react-bootstrap";

const MyBadge = (props) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <h1 className="text-center">
          <Badge variant={props.color}>{props.content}</Badge>
        </h1>
      </Row>
    </Container>
  );
};
export default MyBadge;
