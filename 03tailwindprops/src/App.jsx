import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-4xl'>Tailwind test</h1>
      <Card name="Aadarsh" title="Full stack developer" description="ready to be a full web and app developer" btntext="Ready To Go"/>
      <Card  name="Ansh" title="Python developer" description="ready to be ML developer"/>
    </>
  )
}

export default App
