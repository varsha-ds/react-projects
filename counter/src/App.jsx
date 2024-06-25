import { useState } from 'react'



function App() {
  let [counter, setCounter] = useState(0)
  //let counter = 0
  const addValue = () => {
    //counter = counter + 1
    console.log("clicked",counter)
    if (counter < 20){
      setCounter(counter + 1)
    }
  }
  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>counter value: {counter}</h2>
      <button 
      onClick={addValue}>Increment {counter}</button>
      <br />
      <button
      onClick={removeValue}>Decrement {counter}</button>
    </>
  )
}


export default App
