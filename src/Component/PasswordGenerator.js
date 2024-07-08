import React, { useState  ,useCallback, useEffect,useRef} from 'react'

 function PasswordGenerator() {
    const [noallowed,setnoAllowed]=useState(false)
    const [charallowed,setcharAllowed]=useState(false)
    const[length,setLength]=useState(8);
    const [password,setPassword]=useState("")
    // this useRef is ise for copy button useref is use to refer specific elememt
    const passref= useRef(null)

    const passgenerator = useCallback(()=>{
      let pass=""
      let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(noallowed){
        str+="1234567890"
      }
      if(charallowed){
        str+="@#$%&*{(})-+~"
      }
      for(let i=1;i<=length;i++){
        let char = Math.floor((Math.random()*str.length+1))
        pass+= str.charAt(char)
      }
      setPassword(pass)
     

    },[setPassword,length,setnoAllowed,setcharAllowed])
    function copyclipboard(){
      passref.current?.select();
      window.navigator.clipboard.writeText(password)
    }
    useEffect(()=>{passgenerator()},[length,noallowed,charallowed])

    

  return (
    <>
    <div style={{ height:300, backgroundColor:'wheat', display:'flex' ,alignItems:'center',justifyContent:'center', flexDirection:'column'}}>
        <div>
        <input style={{height:50 ,width:350}}
        type='text'
        value={password}
        placeholder='password'
        readOnly
        ref={passref}

        />
        <button
         style={{backgroundColor:'blue',height:50  }}
         onClick={copyclipboard}
         >Copy
         </button>

        </div>
        <div>
        Length{length} <input style={{color: 'blue'}}
        type='range'
        min={6}
        max={50}
        //below line is use to set slider at given length
        value={length}
        // below this line gets a slider new value and set it as length
        onChange={(e)=>{setLength(e.target.value)}}/>  
        {/* checkbox for number include or not */}
        Number<input
         type='checkbox'
         defaultChecked={noallowed}
         onChange={()=>{setnoAllowed((prev)=>!prev)}} />

        Character<input 
        type='checkbox'
        defaultChecked={charallowed}
        onChange={()=>{setcharAllowed((prev)=>!prev)}} />
         </div>


        

    </div>
    </>
  )
}
export default PasswordGenerator
