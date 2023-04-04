import React,{useState,useEffect} from 'react'


function App() {
  const [message,setMessage]=useState("Hello dear one,learning React..?")

  useEffect(function () {
    console.log('use effect hook called');
    setTimeout(function () {
      setMessage("Great...This is time to learn about HOOKS");
    }, 2000)

}, [])
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={()=>useEffect}>Click me</button>
    </div>
  )
}

export default App


      



