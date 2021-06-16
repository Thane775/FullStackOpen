import { render } from '@testing-library/react'
import React from 'react'

/*const Header = () => {
  const course = 'Half Stack application development'
  
  return(
    <h1>{course}</h1>
  )
}





const App = (props) => {
  

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
      <Header />
          <p>{parts}</p>
          {parts.map(parts => <div> {parts.name} {parts.exercises}</div>)}
       </div>
  )
  
  
    
}*/


const Header = (props) => {
 // const course = 'Half Stack application development'
  return(
   <div>
    <h1>{props.course}</h1>
   </div> 
  )
}

const Content = (props) => {
 // const part1 = 'Fundamentals of React'
  //const part2 = 'Using props to pass data'
  //const part3 = 'State of a component'

return(
  <div>
    <p>
      {props.part1} {props.exercises1}
    </p>
    <p>
      {props.part2} {props.exercises2}
    </p>
    <p>
      {props.part3} {props.exercises3}
    </p>
  </div>

  )
}

const Total = () =>{
  const tootal = 10 + 7 + 14
  return(
    <p>Number of exercise {tootal}</p>
  )
}

const App = () => {
  
  

  return (
    <div>
      <Header course="Fundamentals of React"/>
      <Content part1="Fundamentals of React" exercises1="10" part2="Using props to pass data" exercises2="7" part3="State of a component" exercises3="14" />
      <Total />
    </div>
  )
}

export default App