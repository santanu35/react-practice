import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [counter , setCounter] = useState(15)



  // let counter = 5
  const addValue =() => {
    // console.log("value added" , Math.random());
    if(counter < 20){
      counter = counter +1
      console.log("clicked", counter);
      setCounter(counter)
    }

  }
  const removeValue =()=>{
    if(counter > 0){
      counter = counter-1
      console.log("removeclicked",counter);
      setCounter(counter)
    }

  }



  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br/>
    <button
    onClick={removeValue}
    
    >remove value {counter}</button>
    <p>footer : {counter}</p>
    </>
  );
}

export default App;
