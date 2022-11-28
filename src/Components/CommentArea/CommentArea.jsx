import { ListGroup } from "react-bootstrap";
import { Component } from "react";
import "./comment-area.css";

class CommentArea extends Component {
  state = {
    commentsData: [],
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmN2ExYmQ4MzkzNTAwMTVlOGM0Y2EiLCJpYXQiOjE2NjkyOTg3MTYsImV4cCI6MTY3MDUwODMxNn0.V9rrhlJ5vKFFCUSfJ-ueUnbOQVxzIhAv3biLjAQ58d8",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        // console.log(data);
        this.setState({
          commentsData: data,
        });
      } else {
        console.log("error while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    // console.log("I am componentDidMount");
    this.fetchComments();
  }

  render() {
    // console.log("I am render");
    return (
      // This would be the CommentList
      <ListGroup>
        {this.state.commentsData.map((comment) => {
          console.log("I am a comment" + comment);
          return (
            <ListGroup.Item key={comment._id}>
              {comment.rate}/5 - {comment.comment}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentArea;
