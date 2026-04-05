import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter , setCounter]=useState(0)  //usesate hook ek array return krta hai jisme 2 value hoti hai 1st value state variable hota hai aur 2nd value usko update krne wala function hota hai , or () ke ander initial or defualt value hoti he jo array ke 1st value me store hoti hai , jab bhi hum state variable ki value ko update krte hai to react us component ko re-render krta hai aur updated value ko show krta hai , useState hook ke andar hum kisi bhi type ki value rakh sakte hai jaise number , string , array , object etc.
  
  //let counter =10

  const addValue = () => {
    if(counter<10){
      setCounter((prevCounter)=>prevCounter+1)
      setCounter((prevCounter)=>prevCounter+1)
      setCounter((prevCounter)=>prevCounter+1)
      setCounter((prevCounter)=>prevCounter+1)
    }
  }

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
    <h1>
      chai or react
    </h1>
    <h2>counter value:{counter}</h2>
    <button
    onClick={addValue}>add value {counter}</button>
    <br />
    <button
    onClick={removeValue}>remove value {counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
