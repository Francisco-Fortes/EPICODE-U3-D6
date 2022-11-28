import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook/SingleBook";
// Converting it to Class Component so we can set the state
class BookList extends React.Component {
  state = { searchQuery: "" };

  render() {
    return (
      <Container>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search here"
            value={this.state.searchQuery}
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
          />
        </Form.Group>
        <Row className="justify-content-center">
          {this.props.books
            .filter((book) =>
              book.title.toLowerCase().includes(this.state.searchQuery)
            )
            .slice(0, 3) //slice() must be placed after filter()
            .map((book) => {
              return <SingleBook book={book} />;
            })}
        </Row>
      </Container>
    );
  }
}
// Functional component working
//Deconstructing the object
// const BookList = ({ books }) => {
//   return (
//     <Container>
//       <Row className="justify-content-center">
//         {books.slice(0, 3).map((book) => {
//           return <SingleBook book={book} />;
//         })}
//       </Row>
//     </Container>
//   );
// };

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
