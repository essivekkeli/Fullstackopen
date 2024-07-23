
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

const Vote = (props) => {
  if (!props.vote) {
    console.log("ei ääniä")
    return (
      <div>
        <p>No votes yet</p>
      </div>
    )
  } else {
    console.log("Nyt on ääniä")
    return (
      <div>
        <p>Has {props.vote} votes</p>
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1> {props.name}</h1>
    </div>
  )
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
  const [vote, setVote] = useState(Array.from(new Uint8Array(anecdotes.length)))

  const handleClick = () => {
    const randomSelection = Math.floor(Math.random() * anecdotes.length)
    console.log("random",randomSelection)
    setSelected(randomSelection)
  }

  const handlePoints = () => {
    console.log("tarkistus", selected)
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
    console.log("kopio näyttää", copy)
  }


  const maxVotes = Math.max(...vote)

  const maxIndex = vote.indexOf(maxVotes);
  const maxAnecdote = anecdotes[maxIndex]


  const title1 = "Anecdote of the day"
  const title2 = "Anecdote with the most votes"


  return (
    <div>
      <Header name={title1} />
      <Anecdote selected={anecdotes[selected]} />
      <Vote vote={vote[selected]} />
      <Button handleClick={handlePoints} text='Vote' />
      <Button handleClick={handleClick} text='Next anecdote' />

      <Header name={title2} />
      <p>{maxAnecdote}</p>
      <p>{maxVotes} votes</p>

    </div>
  )
}

export default App