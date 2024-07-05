
import './App.css';
import { useState } from 'react';
import Colorgenerator from './Component/colorgenerator/colorgenerator';


function App() {
  const[time,setTime]= useState(0);
  function change(){
    let temptime=time+1;
    setTime(temptime)
  }
  const decrese=()=>{
    time>1? setTime(time-1):setTime(0);
  }
  
  return (
   <>
   
  <h1>
    today time is {time}
  </h1>
  <button onClick={change}>increse</button>
  <button onClick={decrese}>Reset</button>
  <Colorgenerator/>
  
  
 
 
   </>
  );
}

export default App;
