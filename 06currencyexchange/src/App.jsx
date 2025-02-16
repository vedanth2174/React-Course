import { useState } from 'react'
import './App.css'
// import { InputBox } from './components'
import {useCurrency} from './hooks/useCurrency'

function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrency(from)

  const options  = Objects.keys(currencyInfo)
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>
  {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>
    <h1 className='heading'>Currency Convertor</h1>
    </>
  )
}

export default App
