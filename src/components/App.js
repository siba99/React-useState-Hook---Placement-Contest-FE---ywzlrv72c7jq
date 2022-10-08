
import '../styles/App.css';

import React, { useState } from 'react';

export default function App() {
 //code h

 const[text,setText]=useState("");
 const [inputValue,setInputValue]=useState("");

const buttonClick=()=>{
     setText((oldItems)=>{
      return[...oldItems,inputValue];
     });
     setInputValue("");
}
const changeInput=(e)=>{
  setInputValue(e.target.value);
}

//  function getValue(e){
//    setData(e.target.value)
//  }
  return (
    
    <div>
    <input id='input' value={inputValue}  onChange={changeInput}/>
     {/* {
      print?
      <h1>{data}</h1>:
      null
    }  */}
    <p id="intro">Concated String</p>
    <p id="text">{text}</p>
    <button id='button' onClick={buttonClick}>click me</button>
    {/* <button onClick={()=>setPrint(true)}>Click me</button> */}
    </div>
  );
}
