import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './Persons'

const Person = ({ addName, newName, number, handleName, handleNumber }) => {
  return (
    <div>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={number} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit" >Add</button>
        </div>
      </form>

    </div>
  )
}

const Info = ({ filter, persons, handleDelete }) => {
  const showinfo = filter === ''
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div >
      {showinfo.map(person =>
        <p key={person.name}>{person.name} {person.number} <button onClick={() => handleDelete(person)}>Delete</button></p>

      )}
    </div>
  )
}

const Filter = ({ handleFilter }) => {
  return (
    <div>
      <form>
        <div>
          filter shown with <input onChange={handleFilter} />
        </div>
      </form>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])



  const addName = (event) => {
    event.preventDefault()
    console.log('Add nappia painettu', event.target)

    const existingPerson = persons.find(p => p.name === newName)

    if (existingPerson) {
      console.log('existingperson tulostuu')
      const userConfirmsUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)

      if (userConfirmsUpdate) {
        console.log('usercomfirmed tulostuu')
        const makeUpdate = { ...existingPerson, number: number }

        axios
        .put(`http://localhost:3001/persons/${existingPerson.id}`, makeUpdate)
        .then(response => {
          setPersons(persons.map(p => p.id !== existingPerson.id ? p : response.data))
          setNewName('')
          setNumber('')
        })
        .catch(error => {
          console.log(`There was an error updating the person's number! ${error}`);
        });
      }
      
    } else {
      const personObject = {
        name: newName,
        number: number
      }
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNumber('')
        })
        .catch(error => {
          console.log(`There was an error adding the person! ${error}`)
        })

    }
  }


  const handleDelete = (person) => {
    console.log('pääseekö handleDeleteen?')
    const userConfirmation = window.confirm(`Delete ${person.name} ?`)

    if (userConfirmation) {
      console.log('Delete nappia painettu')

      axios
        .delete(`http://localhost:3001/persons/${person.id}`)
        .then(() => {
          setPersons(persons.filter(p => p.id !== person.id))
        })
        .catch(error => {
          console.log(`There was an error deleting the person! ${error}`)
        })

      console.log('Contact info deleted')
    } else {
      console.log('Delete canceled')
    }
  }


  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleFilter={handleFilter}
      />

      <h2>Add a new</h2>
      <Person
        addName={addName} newName={newName} number={number} handleName={handleName} handleNumber={handleNumber}
      />

      <h2>Numbers</h2>
      <Info
        persons={persons} filter={filter} handleDelete={handleDelete}
      />
    </div>
  )
}

export default App
