import React, { useReducer } from 'react'

function CheckBoxSec (){
    const [checked,setChecked] = useReducer((checked)=>!checked,false)
  return(
    <>
    <input type="checkbox" value={checked} onChange={setChecked}/>
    </>
  )
}

export default CheckBoxSec