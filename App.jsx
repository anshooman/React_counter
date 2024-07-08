import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(11) //counter will start from 11

  //let counter = 15 
 
  const addvalue =() => {
    if(counter+1 > 20){
      alert("Limit reached , max counter value is 20")
    }else{
      setCounter(counter+1)
    }
  }
  const removevalue =() => {
    if(counter-1 < 0){
      alert("Limit reached , min counter value is 0")
    }else{
      setCounter(counter-1)
    }

  }

  return (
    <>
      <h1>Simple Counter</h1>
      <h2>Counter value  : {counter}</h2>

      <button onClick={addvalue}> Add value</button>
      <br/>
      <br/>
      <button onClick={removevalue}> Remove value</button>
    </>

  )
}

export default App
