import React, { useState } from 'react'

 function PasswordGenerator() {
    const [noallowed,setnoAllowed]=useState(false)
    const [charallowed,setcharAllowed]=useState(false)
    

  return (
    <>
    <div style={{ height:300, backgroundColor:'wheat', display:'flex' ,alignItems:'center',justifyContent:'center', flexDirection:'column'}}>
        <input style={{height:50 ,width:350}}
        type='text'
        // value={pass}
        placeholder='password'

        />
        <div>
        Length <input style={{color: 'blue'}}
        type='range'
        min={6}
        max={50}/>
        Number<input type='checkbox' />
        Character<input type='checkbox' />
         </div>


        

    </div>
    </>
  )
}
export default PasswordGenerator
