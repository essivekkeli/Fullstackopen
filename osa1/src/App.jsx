/*const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props + "Part module")
  return (
    <div>
      <p> {props.name} : {props.exercises} exercises</p>
    </div>
  )
}

//Osat ja niiden tehtavamaarat
const Content = (props) => {
  console.log(props + "Content module")
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log(props + "Total module")
  return (
    <div>
      <p> Total of {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]

  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}*/



/*
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

*/



import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Anecdote = (props) => {
  if (!props.selected) {
    console.log("Vielä ei ole klikattu")
    return (
      <div>
        Button is not clicked
      </div>
    )
  } else {
    console.log("Nyt on klikattu")
    return (
      <div>
        <p>{props.selected}</p>
      </div>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const handleClick = () => {
    const randomSelection = Math.floor(Math.random()* anecdotes.length);
    setSelected(anecdotes[randomSelection])
  }


  return (
    <div>
      <Anecdote selected={selected} />
      <Button handleClick={handleClick} text='Next anecdote' />
    </div>
  )
}

export default App