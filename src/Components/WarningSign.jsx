import { Alert } from "react-bootstrap";

const WarningSign = ({ content }) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Alert</Alert.Heading>
      <p>{content}</p>
    </Alert>
  );
};

export default WarningSign;
