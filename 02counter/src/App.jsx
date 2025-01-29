import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //in lecture
  // let [counter, setCounter] = useState(15)
  // // let counter = 15
  // const addValue = function addValue(){
  //   setCounter(counter++)
  //   console.log('value added', counter)
  // }
  // const deleteValue = function deleteValue(){
  //   setCounter(counter--)
  //   console.log('value deleted ', counter)
  // }

  //assignment // add constraints(min value 0 and max value 20)
  let [counter, setCounter] = useState(15)
  let counter1 = 0
  const addValue = function addValue(){
    if(counter<=20){
    setCounter(counter++)
    console.log(counter1++)
  }
  console.log('value added', {counter})
}
const deleteValue = function deleteValue(){
  if(counter>-1){
    setCounter(counter--)
    console.log(counter1++)
    }
    console.log('value deleted ', {counter})
  }
  return (
    <>
    <h1>Vedant is back</h1>
    <h1>counter value: {counter}</h1>
    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <button
    onClick={deleteValue}
    >Delete Value {counter}</button>
    <footer>footer: {counter}</footer>
    </>
  )
}

export default App
