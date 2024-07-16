/*const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)*/

/*
const App = () => {
  console.log('Hello from komponentti')
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
*/

/*const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
        </p>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return (
  <div>
    <h1>Greetings</h1>
    <Hello name="Maya" age={26+10}/>
    <Hello name={nimi} age={ika}/>
    <Hello/>
  </div>
)
}*/

/*
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}*/

/*const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <Hello />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />

      <Hello />
      <Hello />
    </div>
  )
}*/


//props
/*const Hello = (props) => {
  return (
    <div>

      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name="Maya" />
      <Hello name="Pekka" />
    </div>
  )
}*/


//2 propsia
/*const Hello = (props) => {

  console.log(props)
  return (
    <div>
      <p>

        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {

  const nimi = 'Pekka'
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
    </div>
  )
}*/

/*
const App = () => {
  const friends = [
    { name: 'Leevi', age: 4 },
    { name: 'Venla', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}*/




//1.1
/*
Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

//1.2
const Part = (props) => {
  return (
    <div>
      <p> {props.name} : { props.exercises} exercises</p>
    </div>
  )

  
}

//Osat ja niiden tehtavamaarat
const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Part name={part1} exercises={exercises1}/>
      <Part name={part2} exercises={exercises2}/>
      <Part name={part3} exercises={exercises3}/>
    </div>
  )


  /*const courses = [
    {name: 'Fundamentals of React', exer: 10 },
    {name: 'Using props to pass data', exer: 7 },
    {name: 'State of a component', exer: 14 },
  ]

  return (
    <div>
      <p>{courses[0].name} : {courses[0].exer} exercises</p>
      <p>{courses[1].name} : {courses[1].exer} exercises</p>
      <p>{courses[2].name} : {courses[2].exer} exercises</p>
    </div>
  )
}

//tehtavien yhteismaara
const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <p>
        Total of {exercises1 + exercises2 + exercises3} exercises.
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <Header name={course} />
      <Content />
      <Total />
    </div>
  )
}*/



//1.3
/* 
const part1 = {
  name: 'Fundamentals of React',
  exercises: 10
}
console.log(part1)

const part2 = {
  name: 'Using props to pass data',
  exercises: 7
}
console.log(part2)

const part3 = {
  name: 'State of a component',
  exercises: 14
}
console.log(part3)


const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p> {props.name} : { props.exercises} exercises</p>
    </div>
  ) 
}


//Osat ja niiden tehtavamaarat
const Content = () => {

  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises}/>
      <Part name={part2.name} exercises={part2.exercises}/>
      <Part name={part2.name} exercises={part2.exercises}/>
    
    </div>
  )

}


const Total = () => {
  return (
    <div>
      <p> Total of {part1.exercises + part2.exercises + part3.exercises} exercises </p>
    </div>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  
  return (
    <div>
      <Header name={course}/>
      <Content/>
      <Total/>
    </div>
  )
}*/






//1.4
/*
const Header = (props) => {
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
  const course = 'Half Stack application development'
  const parts = [
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
  
  return (
    <div>
      <Header name={course}/>
      <Content name={parts}/>
      <Total name={parts}/>
    </div>
  )
}*/


//1.5
/*
const Header = (props) => {
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




//esimerkit jatkuu - komponenttien apufunktiot
/*
const Hello = (props) => {
  const name = props.name
  const age = props.age

  const bornYear = () => new Date().getFullYear() - age


  return (
    <div>
      <p> Hello {name}, you are {age} years old</p>
      <p>Eli olet syntynyt vuonna {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
    </div>
  )
}*/

//Destrukturointi
/*const Hello = ({name,age}) => {
  //const {name, age} = props 
  const bornYear = () => new Date().getFullYear() - age


  return (
    <div>
      <p> Hello {name}, you are {age} years old</p>
      <p>Eli olet syntynyt vuonna {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
    </div>
  )
}*/

//Uudelleen renderöinti
/*const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}*/


//Tilallinen komponentti
/*import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)


  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  //console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}*/


//Tapahtumien käsittely 
/*
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}> 
        zero
      </button>
    </div>
  )
}*/

//Tapahtumankäsittelijä on funktio
/*import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)


  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>

      <button onClick={increaseByOne}>
        plus
      </button>

      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}*/

//Tilan vieminen alikomponenttiin 
/*const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)

  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>

      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}*/

/*
import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  return (
    <div>
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
    </div>
  )
}*/

/*
import { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = left + 1
    setRight(updatedRight)
    setTotal(updatedRight + left)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
    </div>
  )
}*/


/*
import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = left + 1
    setRight(updatedRight)
    setTotal(updatedRight + left)
  }

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {right}

        <History allClicks={allClicks} />
      </div>
    </div>
  )
}*/


const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>

        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}


export default App