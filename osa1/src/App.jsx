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
  return (
    <div>
      <p>{props.title}</p>
    </div>
  )
}

import { useState } from 'react'

const App = () => {
  const label1 = "Give feedback"
  const label2 = "Statistics"

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  const all = good+neutral+bad


  return (
    <div>
      <Header name={label1} />

      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <br></br>
      
      <Header name= {label2}/>
      
      <Statistics title={'Good'}/> {good}
      <Statistics title={'Neutral'}/> {neutral}
      <Statistics title={'Bad'}/> {bad}

      <Statistics title={'Sum'}/>{all} 
      <Statistics title={'Average'}/>{(all)/3} 
      <Statistics title={'Positive'}/>{(good/all)} 
    </div>
  )
}


export default App