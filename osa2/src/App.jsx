
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
      <Part name={props.coursename} exercises={props.exe} />
      <Part name={props.coursename} exercises={props.exe} />
      <Part name={props.coursename} exercises={props.exe} />
    </div>
  )
}


/*
const Total = (props) => {
  console.log(props + "Total module")
  
  return (
    <div>
      <p> Total of {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} exercises</p>
    </div>
  )
}
*/

const Course = (props) => {
  console.log(props + "Course module")
  return (
    <div>
      <Header name={props.course}/>
      <Content parts1={props.parts} parts2={props.exparts}/>
     
    </div>
  )
}


const App = (props) => {
  console.log(props, "")
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
      <Course course={course.name}  />
    </div>
  )
}

export default App