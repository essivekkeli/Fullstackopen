
import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <p> {props.name}</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
          <td>{props.pros}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = (props) => {

  if (props.allClicks === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else {
    return (
      <div>
        <StatisticLine text="Good:" value={props.good} />
        <StatisticLine text="Neutral:" value={props.neutral} />
        <StatisticLine text="Bad:" value={props.bad} />
        <StatisticLine text="Sum:" value={props.sum} />
        <StatisticLine text="Average:" value={props.avg} />
        <StatisticLine text="Positive:" value={props.pos} pros="%" />
      </div>
    )
  }
}

const App = () => {
  const label1 = "Give feedback"
  const label2 = "Statistics"

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setClicks] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    handleAllClick(updatedGood, neutral, bad)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    handleAllClick(good, updatedNeutral, bad)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    handleAllClick(good, neutral, updatedBad)
  }


  const handleAllClick = (good, neutral, bad) => {
    const all = good + neutral + bad
    setClicks(all)
  }

  const average = ((good - bad) / allClicks)

  const positive = ((good / allClicks) * 100)


  return (
    <div>
      <Header name={label1} />

      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <br></br>

      <Header name={label2} />

      <Statistics
        allClicks={allClicks}
        good={good}
        bad={bad}
        neutral={neutral}
        sum={allClicks}
        pos={positive}
        avg={average} />
    </div>
  )
}


export default App

