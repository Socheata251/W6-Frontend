import pnLogo from "./assets/pn-logo.png";
import Scores from "./components/Scores";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header batchName="Fake Batch" />

      <main className="scores-container">
      <Scores
        courseName="HTML"
        courseResults={[
          { firstName: "John", lastName: "Doe", score: 55 },
          { firstName: "Jane", lastName: "Smith", score: 45 },
        ]}
      />
      
      </main>
    </>
  );
}

export default App;
