//2.6-2.10

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('your name')

  

  const addName = (event) => {
    event.preventDefault()
    console.log('nappia painettu', event.target)
    setNewName()
  }

  const handlePerson = (event) => {
    console.log(event.target.value)
    console.log('person', event, target)
    setPersons(persons.concat(newName))
  }

  const handleName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleName}/>
          
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>
        {persons.map(person =>
            key={person.name} {newName},
        )},
      </p>
      ...
    </div>
  )

}

export default App












//2.1-2.5
/*import Course from './course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  

  return (
    <div>¨
      <h1>Web development curriculum</h1>
      {courses.map(course => (
        <Course key={course.id}  course={course} />
      ))}
    </div>
  )
}

export default App*/