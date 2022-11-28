import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import WarningSign from "./Components/WarningSign";
// import MyBadge from "./Components/MyBadge";
// import SingleBook from "./Components/SingleBook/SingleBook";
import BookList from "./Components/BookList";
import fantasyBook from "./Data/books/fantasy.json";
function App() {
  return (
    <div className="App">
      {/* <WarningSign content="Am I working?" /> */}
      <BookList books={fantasyBook} />
      {/* <MyBadge content="Am I yellow?" color="warning" /> */}
    </div>
  );
}

export default App;
