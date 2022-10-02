
import '../styles/App.css';

import React, { useState } from 'react';

export default function App() {
 //code h

 const[data,setData]=useState(" ");
 const [print,setPrint]=useState(" ");

const buttonClick=()=>{
     setData((oldItems)=>{
      return[...oldItems,print];
     });
     setPrint("");
}
const changeInput=(e)=>{
  setPrint(e.target.value);
}

//  function getValue(e){
//    setData(e.target.value)
//  }
  return (
    
    <div>
    <input id='input' type="text" value={print}  onChange={changeInput}/>
     {/* {
      print?
      <h1>{data}</h1>:
      null
    }  */}
    <p id="intro">Concated String</p>
    <p id="text">{data}</p>
    <button id='button' onClick={buttonClick}>click me</button>
    {/* <button onClick={()=>setPrint(true)}>Click me</button> */}
    </div>
    
  );
}
