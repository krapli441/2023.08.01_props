import "./App.css";

function Genre({ name }) {
  return <h2>I Like {name}.</h2>;
}

const genreILike = [
  {
    id: 1,
    name: "House",
  },
  { id: 2, name: "Disco" },
  { id: 3, name: "Jazz" },
  { id: 4, name: "Techno" },
  { id: 5, name: "Trap" },
  { id: 6, name: "Drum&Bass" },
  { id: 7, name: "G-Funk" },
  { id: 8, name: "Fusion Jazz" },
  { id: 9, name: "Rock" },
  { id: 10, name: "Metal" },
  { id: 11, name: "IDM" },
];

function renderGenre(list) {
  return <Genre key={list.id} name={list.name} />;
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
