import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter = 15
  const addValue = function addValue(){
    counter++
    console.log('value added', counter)
  }
  const deleteValue = function deleteValue(){
    counter--
    console.log('value deleted ', counter)
  }
  return (
    <>
    <h1>Vedant is back</h1>
    <h1>counter value: {counter}</h1>
    <button
    onClick={addValue}
    >Add value</button>
    <br />
    <button
    onClick={deleteValue}
    >Delete Value</button>
    </>
  )
}

export default App
