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
        <p>Good {props.good}</p>
        <p>Neutral {props.neutral}</p>
        <p>Bad {props.bad}</p>
        <p>Sum {props.sum}</p>
        <p>Average {props.avg}</p>
        <p>Positive {props.pos} %</p>
      </div>
    )
  }
}


import { useState } from 'react'

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
  
  const average = ((good-bad)/allClicks)

  const positive = ((good/allClicks)*100)
 

  return (
    <div>
      <Header name={label1} />

      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <br></br>

      <Header name={label2} />

      <Statistics allClicks={allClicks} 
      good={good} 
      bad={bad} 
      neutral={neutral}
      avg={average}
      sum={allClicks}
      pos={positive}/> 
    </div>
  )
}


export default App