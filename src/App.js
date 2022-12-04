import logo from "./logo.svg";
import EightBall from "./EightBall.jsx";
import answers from "./answers.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <EightBall answers={answers} />
    </div>
  );
}

export default App;
