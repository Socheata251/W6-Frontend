// step2
function Scores({ courseName, courseResults }) {
  return (
    <div className="scores">
      <h1>{courseName}</h1>      
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {courseResults.map((result, index) => (   
            <tr key={index}>
              <td>{result.firstName}</td>
              <td>{result.lastName}</td>
              <td className={getScoreClassName(result.score)}>
                {result.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Statistics courseResults={courseResults} />
    </div>
  );
}
//step3 
function getScoreClassName(score) {
  if (score < 50) {
    return "warning";  
  } else {
    return "";         
  }
}
//step4
function Statistics({ courseResults }) {
  const scores = courseResults.map((result) => result.score);
  const avg = Math.round(scores.reduce((sum, s) => sum + s, 0) / scores.length);
  const min = Math.min(...scores);
  const max = Math.max(...scores);
  return (
    <div className="statistics">
      <div className="stat-item">
        <div className="stat-label">AVERAGE</div>
        <div className="stat-value">{avg}</div>
      </div>
      <div className="stat-item">
        <div className="stat-label">MIN</div>
        <div className={`stat-value ${min < 50 ? "warning" : ""}`}>{min}</div>
      </div>
      <div className="stat-item">
        <div className="stat-label">MAX</div>
        <div className="stat-value">{max}</div>
      </div>
    </div>
  );
}
export default Scores;