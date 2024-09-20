import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Button actions
  const clickGood = () => {
    setGood(good + 1)
  }

  const clickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const clickBad = () => {
    setBad(bad + 1)
  }

  // Main rendering
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={clickGood} text="good" />
      <Button onClick={clickNeutral} text="neutral" />
      <Button onClick={clickBad} text="bad" />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

// Button component
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

// StatisticLine component for displaying a single statistic in a table row
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

// Statistics component displaying all statistics in a table
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100 + ' %'

  if (total === 0) {
    return <p>No feedback given</p> 
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positive} />
      </tbody>
    </table>
  )
}

export default App

