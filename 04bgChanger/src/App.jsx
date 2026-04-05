import { useState } from "react"


function App() {

  const[color , setColor] = useState("olive")


  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2">
          <button onClick={()=>{setColor("red")}}     // yha per hamne onlick me callback function diya he normal function nahi diya kyu ki normal function kuch return dega or onlick me kuch return value aaegi jo kaam nahi karegi or ham parameter me color bhi pass nahi kar payenge isliye hamne callback function diya he taki jab button click ho to hamara function call ho aur usme color pass kar paye 
          className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>{setColor("green")}}
          className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>{setColor("blue")}}
          className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>{setColor("orange")}}
          className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>orange</button>
          <button onClick={()=>{setColor("pink")}}
          className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>pink</button>
          <button onClick={()=>{setColor("brown")}}
          className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"brown"}}>brown</button>
        </div>
      </div>
    </div>


  )
}

export default App
