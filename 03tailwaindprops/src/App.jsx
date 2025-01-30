import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let newobj = {
    key1:1,
    key2:3,
    key31:2
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-14'>Tailwind Test</h1>
    <Card  username="Vedant"/>
    <Card  username="havanabhai"/>

    </>
  )
}

export default App
