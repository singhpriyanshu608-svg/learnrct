import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//let counter = 5;
let [counter , setCounter] = useState(15);
const addValue = () =>{
  console.log("value added");
  if(counter<20){
  setCounter(counter+1);}
}
const removeValue = () =>{
  if(counter>0){
  setCounter(counter-1);}
}
  return (
    <>
  <h1>Counter</h1>
  <h2>Countor value : {counter}</h2>
  <button
  onClick={addValue}>Add value {counter}</button>
  <br></br>
  <button 
  onClick={removeValue}>Remove value{counter}</button>
  <p>footer : {counter}</p>
    </>
  )
}

export default App
