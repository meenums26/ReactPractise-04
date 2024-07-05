import React, { useRef } from 'react'

function UnControlledComp(){
    const textRef = useRef();
    const colorRef = useRef();
const submit =(e)=>{
e.preventDefault();
  alert(`${textRef.current.value}, ${colorRef.current.value}`)
  textRef.current.value = "";
  colorRef.current.value=""
}

    return(
        <>
        <form onSubmit={submit}>
        <input type="text" ref={textRef}/>
        <input type="color" ref={colorRef}/>
        <button type="submit">Done</button>
        </form>
        
        </>
    )
}

export default UnControlledComp;