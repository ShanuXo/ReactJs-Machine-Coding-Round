import "./style.css";
import questions from './data';
import Accordian from "./Accordian";

const App = () => {
  return (
    <div className="app">
    <h1>Accordian</h1>
      {questions.map((question) => {
        return <Accordian {...question} />;
      })}
    </div>
  )
}

export default App
