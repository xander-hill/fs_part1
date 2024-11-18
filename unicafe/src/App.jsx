import { useState } from 'react'

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <table>
      <tbody>
        <Statistic name = 'good' value = {props.good}/>
        <Statistic name = 'netural' value = {props.neutral}/>
        <Statistic name = 'bad' value = {props.bad}/>
        <Statistic name = 'total' value = {props.total}/>
        <Statistic name = 'average' value = {props.average}/>
        <Statistic name = 'positive' value = {props.positive}/>
      </tbody>
    </table>
  )
}

const Statistic = ({name, value}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({handleClick, name}) => {
  return (
    <button onClick ={handleClick}> {name} </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = ((good/total) * 100) + '%'

  const handleGoodClick = () => {
    console.log('good before', good)
    setGood(good + 1)
    console.log('good after', good + 1)
  }

  const handleNeutralClick = () => {
    console.log('neutral before', neutral)
    setNeutral(neutral + 1)
    console.log('neutral after', neutral + 1)
  }

  const handleBadClick = () => {
    console.log('bad before', bad)
    setBad(bad + 1)
    console.log('bad after', bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button name = 'bad' handleClick={handleBadClick}/>
      <Button name = 'neutral' handleClick={handleNeutralClick}/>
      <Button name = 'good' handleClick={handleGoodClick}/>
      <h2>Statistics</h2>
      <Statistics good = {good} neutral = {neutral} bad = {bad} total={total} average={average} positive={positive}/>
    </div>
  )
}

export default App
