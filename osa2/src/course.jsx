const Header = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
      </div>
    )
  }
  
  const Part = (props) => {
    console.log(props, "Part module")
    return (
      <div>
        <p>{props.name} : {props.exercises} exercises</p>
      </div>
    )
  }
  
  const Content = (props) => {
    console.log(props, "Content module")
    return (
      <div>
        {props.parts.map(part => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    )
  }
  
  const Total = ({ total }) => {
    const sum = total ? total.reduce((cours, num) => {
      console.log('mitä tulostuu', cours, num)
      return cours + num.exercises
    }, 0) : 0;
  
    return (
      <div>
        <p>Total of exercises: {sum}</p>
      </div>
    )
  }
  
  const Course = ({course}) => {
    console.log(course, "Course module")
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total total={course.parts} />
      </div>
    )
  }

  export default Course