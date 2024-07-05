
import './App.css';
import { useState } from 'react';
import Colorgenerator from './Component/colorgenerator/colorgenerator';
import PasswordGenerator from './Component/PasswordGenerator';


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
  <h1 style={{marginLeft:100}}>Combination of Basic Simple Projects... too get strong command on react</h1>
  <h2> 1.ColorGenerator</h2>
  <Colorgenerator/>
  <h2>2.Password Generator</h2>
  <PasswordGenerator/>
  
  
 
 
   </>
  );
}

export default App;
