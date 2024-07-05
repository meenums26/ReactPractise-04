import React, { useState } from 'react';
//custom hook
function useInput(initialValue){
const [value,setValue] = useState(initialValue)
return([
    {
        value,
        onChange: (e)=>setValue(e.target.value)
    },
    ()=>setValue(initialValue)

])
}

function ControlledComp(){
   const [titleProps, resetTitle] = useInput("");
   const [colorProps, resetColor] = useInput("#0000")
const submit =(e)=>{
e.preventDefault();
alert(`${titleProps.value}, ${colorProps.value}`)
resetTitle()
resetColor()
}

    return(
        <>
        <h3>controlled component</h3>
        <form onSubmit={submit}>
        <input type="text" {...titleProps}/>
        <input type="color" {...colorProps}/>
        <button type="submit">Done</button>
        </form>
        
        </>
    )
}

export default ControlledComp