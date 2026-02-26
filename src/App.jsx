import pnLogo from "./assets/pn-logo.png";
import Scores from "./components/Scores";
import Header from "./components/Header";
import {  HTML_RESULTS } from "./data";

function App() {
  return (
    <>
      <Header batchName="Fake Batch" />
      <main className="scores-container">
        <Scores courseName="HTML"    courseResults={HTML_RESULTS}    />
      </main>
    </>
  );
}

export default App;
