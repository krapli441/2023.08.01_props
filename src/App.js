import "./App.css";

function Genre(props) {
  return <h2>I Like {props.genre}.</h2>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Music</h1>
          <Genre genre="house"></Genre>
          <Genre genre="disco"></Genre>
          <Genre genre="techno"></Genre>
          <Genre genre="jazz"></Genre>
        </div>
      </header>
    </div>
  );
}

export default App;
