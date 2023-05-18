function Background() {
  return (
    <div>
      Basic History Goes Here
    </div>
  )
}

function InDivScore(score) {
  return (
    <div key={score.id}>
      <p><b>{score.year}</b> - {score.score}</p>
    </div>
  )
}

function Score(score) {
  return <div key={score.name} id={score.name} className="card">
    <h2>{score.name}</h2>
    {
      score.scores.map(InDivScore)
    }
  </div>
}

function Competition() {
  const [scores, setScores] = React.useState([
    {
      name: "AMC-10",
      scores: [
        {
          id: "key1",
          year: "2022",
          score: "84"
        }
      ]
    },
    {
      name: "MATHCOUNTS",
      scores: [
        {
          id: "key2",
          year: "2023 STATE",
          score: "30"
        }
      ]
    },
  ])
  return (
    <div id="card-container">
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
      <div id="header" className="content">
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
