import React, { useState } from 'react'

 function Colorgenerator({}) {
    const[color,setColor]=useState('black')
  return (
    <>
    <div  className ="container" style={{backgroundColor:color, height:300,weight:300 }}>
         <div >
          <button onClick={()=>setColor('red')}>Red</button>
          <button onClick={()=>setColor('blue')}>Blue</button>
          <button onClick={()=>setColor('grey')}>Grey</button>
          <button onClick={()=>setColor('pink')}>pink</button>
          <button onClick={()=>setColor('yellow')}>yellow</button>
         </div>
    </div>
    </>
  )
}
export default Colorgenerator
