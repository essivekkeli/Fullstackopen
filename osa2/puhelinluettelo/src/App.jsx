import { useState } from 'react'

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
          <button type="submit" >add</button>
        </div>
      </form>

    </div>
  )
}

const Info = ({filter, persons}) => {
  const showinfo = filter === ''
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div >
        {showinfo.map(person =>
          <p key={person.name}>{person.name} {person.number}</p>
        )}
      </div>
  )
}

const Filter = ({handleFilter}) => {
  return (
    <div>
      <form>
        <div>
          filter shown with <input onChange={handleFilter}/>
        </div>
      </form>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')

  const [number, setNumber] = useState('')

  const [filter, setFilter] = useState('')



  const addName = (event) => {
    event.preventDefault()
    console.log('nappia painettu', event.target)

    const nameArray = persons.map(nimi => nimi.name)
    console.log('Nimilista ', nameArray)
    console.log('newName on', newName)


    if (nameArray.includes(newName)) {
      window.alert(newName + ' is already added to phonebook')
      console.log(newName, 'on jo taulukossa')
    }
    else {
      addPerson(event)
      console.log('taulukon sisältö', persons)
    }
  }


  const addPerson = (event) => {
    console.log(event.target.value)
    event.preventDefault()
    const personObject = {
      name: newName,
      number: number
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNumber('')
  }


  const handleName = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNumber(event.target.value)
  }

  const handleFilter = (event) => {
    event.preventDefault()
    console.log(event.target.value)
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
        persons={persons} filter={filter}
      />
    </div>
  )
}

export default App
