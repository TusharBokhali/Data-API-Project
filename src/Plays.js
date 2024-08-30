import React, { useState } from 'react'
import './componets/levely.css'
import level1 from './question.png'
import { json } from 'react-router';
function    Levels() {
    let [values,setvalues] = useState("")
    let [win,Setwin] = useState(0);
    function inputboxvalue(num){
        num = String( values+num); 
            setvalues(num)
    }
    function GetValues(){
      console.log(values);
      if(values == 0){
        Setwin(win+1);  
      }
      sessionStorage.setItem("win",JSON.stringify(win))
      console.log(win);
      setvalues("")
      
    }
    let arraysImages = []
  return (
    <div className='All-content'>
      <h1>Levels 1</h1>
        <div className="problems">
            <img src={level1} alt="" />
        </div>
      <div className="container">
      <div className="All-inputs">
            <input type="text" value={values} />
            <div>
                <button onClick={()=>inputboxvalue(1)}>1</button>
                <button onClick={()=>inputboxvalue(2)}>2</button>
                <button onClick={()=>inputboxvalue(3)}>3</button>
                <button onClick={()=>inputboxvalue(4)}>4</button>
                <button onClick={()=>inputboxvalue(5)}>5</button>
                <button onClick={()=>inputboxvalue(6)}>6</button>
                <button onClick={()=>inputboxvalue(7)}>7</button>
                <button onClick={()=>inputboxvalue(8)}>8</button>
                <button onClick={()=>inputboxvalue(9)}>9</button>
            </div>
      <div>
        <button onClick={()=>{setvalues("")}}>X</button>
        <button onClick={()=>inputboxvalue(0)}>0</button>
        <button onClick={GetValues}>Enter</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Levels
