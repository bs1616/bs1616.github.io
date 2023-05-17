function Background() {
  return (
    <div>
      Basic History Goes Here
    </div>
  )
}

function Score(score) {
  return <div key={score.name}>
    <p><b>{score.name}</b> - {score.score}</p>
  </div>
}

function Competition() {
  const [scores, setScores] = React.useState([
    {
      name: "AMC 10",
      score: "84"
    }
  ])
  return (
    <div>
      {
        scores.map(Score)
      }
          
    </div>
  )
}

function Acad() {
  return (
    <div id="acad">
      Academic History Goes Here
    </div>
  )
}

function App() {
  return (
    <div>
      <div id="header">
        <h1>This is Me</h1>
      </div>
      <div id="bg" className="content">
        <h1>Background</h1>
        <Background />
      </div>
      <div id="comp" className="content">
        <h1>Competition Scores</h1>
        <Competition />
      </div>
      <div id="acad" className="content">
        <h1>Academic History</h1>
        <Acad/>
      </div>
    </div>
  )
}
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);