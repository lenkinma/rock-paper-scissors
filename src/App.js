import Header from "./components/Header/Header";
import {useState} from "react";
import Game from "./components/Game/Game";
import Footer from "./components/Footer/Footer";

function App() {
  const [score, setScore] = useState(0);
  const [gameCounter, setGameCounter] = useState(0);

  return (
    <div className="App container">
      <Header score={score} setScore={setScore} setGameCounter={setGameCounter} />
      <Game score={score} setScore={setScore} gameCounter={gameCounter} setGameCounter={setGameCounter}/>
      <Footer gameCounter={gameCounter}/>
    </div>
  );
}

export default App;
