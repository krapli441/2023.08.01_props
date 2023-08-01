import "./App.css";

function Genre({ name }) {
  return <h2>I Like {name}.</h2>;
}

const genreILike = [
  {
    name: "House",
  },
  {
    name: "Disco",
  },
  {
    name: "Jazz",
  },
  {
    name: "Techno",
  },
  {
    name: "Trap",
  },
  {
    name: "Drum&Bass",
  },
  {
    name: "G-Funk",
  },
  {
    name: "Fusion Jazz",
  },
  {
    name: "Rock",
  },
  {
    name: "Metal",
  },
  {
    name: "IDM",
  },
];

function renderGenre(list) {
  return <Genre name={list.name} />;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Music</h1>
          {genreILike.map(renderGenre)}
        </div>
      </header>
    </div>
  );
}

export default App;
