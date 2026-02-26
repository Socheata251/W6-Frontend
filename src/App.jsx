import pnLogo from "./assets/pn-logo.png";
import Scores from "./components/Scores";
import Header from "./components/Header";
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS } from "./data";

function App() {
  return (
    <>
      <Header batchName="Fake Batch" />

      <main className="scores-container">
      <Scores courseName="Java"    courseResults={JAVA_RESULTS}    />
        <Scores courseName="Python"  courseResults={PYTHON_RESULTS}  />
        <Scores courseName="HTML"    courseResults={HTML_RESULTS}    />
        <Scores courseName="English" courseResults={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;
