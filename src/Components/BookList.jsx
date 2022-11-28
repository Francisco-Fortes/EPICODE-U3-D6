import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook/SingleBook";
//Deconstructing the object
const BookList = ({ books }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        {books.slice(0, 3).map((book) => {
          return <SingleBook book={book} />;
        })}
      </Row>
    </Container>
  );
};

// Done with props
// const BookList = (props) => {
//   return (
//     <Container>
//       <Row className="justify-content-center">
//         {props.books.map((book) => {
//           return <SingleBook book={book} />;
//         })}
//       </Row>
//     </Container>
//   );
// };

export default BookList;
