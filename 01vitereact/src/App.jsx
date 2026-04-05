import Chai from "./chai";

function App() {
  const username ="chai or code"
  return (
    <>
      <Chai />
       <h1>chai or react {username} </h1>    {/*username ek evaluated expression he , hame pehle hi ise evaluate karna padega or final outcome yaha dena hoga */}
      <p>This is a simple React app.</p>
    </>
  )
}

export default App
