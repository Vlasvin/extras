import "./App.css";
import Header from "./components/Header";

function App() {
  const handleRegisterClick = () => {};

  return (
    <div className="App">
      <Header onRegisterClick={handleRegisterClick} />
    </div>
  );
}

export default App;
