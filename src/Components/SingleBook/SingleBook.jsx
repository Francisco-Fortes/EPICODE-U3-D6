import { Card } from "react-bootstrap";
import "./single-book.css";
import "../CommentArea/CommentArea";
import CommentArea from "../CommentArea/CommentArea";
// import fantasyBook from "../../Data/books/fantasy.json";
//How can I do it with {book}
const SingleBook = ({ book }) => {
  return (
    <Card key={book.asin} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title class="red-text">{book.title}</Card.Title>
        <CommentArea bookId={book.asin} />
      </Card.Body>
    </Card>
  );
};
export default SingleBook;
