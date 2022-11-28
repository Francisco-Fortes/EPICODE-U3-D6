import { Card } from "react-bootstrap";
import "./single-book.css";
import "../CommentArea/CommentArea";
import CommentArea from "../CommentArea/CommentArea";
// import fantasyBook from "../../Data/books/fantasy.json";
//How can I do it with {book}
const SingleBook = (props) => {
  return (
    <Card key={this.props.book.asin} style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={this.props.book.img}
        alt={this.props.book.title}
      />
      <Card.Body>
        <Card.Title class="red-text">{this.props.book.title}</Card.Title>
        <CommentArea bookId={this.props.book.asin} />
      </Card.Body>
    </Card>
  );
};
export default SingleBook;
