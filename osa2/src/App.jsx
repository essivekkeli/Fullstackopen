
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

const Content = (props) => {
  console.log(props + "Content module")
  return (
    <div>
      {props.parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}


const Total = ({parts}) => {
  const sum = parts.reduce((acc, part) => acc + part.exercises, 0);

  console.log(props + "Total module")
  return (
    <div>
      <p>Total of exercises: {sum} </p>
    </div>
  )
}


const Course = (props) => {
  console.log(props + "Pääseekö tänne? Course module")
  return (
    <div>
      <Header name={props.course} />
      <Content parts={props.parts} />
      <Total />

    </div>
  )
}


const App = (props) => {
  console.log(props, "mitä prosp tulostaa Appin alussa")
  const course = {
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
      }
    ]
  }

  return (
    <div>
      <Course
        course={course.name}
        parts={course.parts}
        total={course.total}
      />
    </div>
  )
}

export default App