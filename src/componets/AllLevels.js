import React, { useState } from 'react'
import './alllevels.css'
import Plays from '../Plays'

function AllLevels() {
 
  let [open,setOpen] = useState(false);

  function levelUp(level){
    if(level==1){
      if(open == false){
        setOpen(true);
      }
    }else{
      alert("You can't level up yet!")
    }
  }

  return (
    <>
   
    <div className={open === true ? 'none' : 'All-member'}>
    <h2>Levels</h2> 
      <div className="All-levels">
            <button onClick={()=>{levelUp(1)}}>1</button>
            <button onClick={()=>{levelUp(2)}}>2</button>
            <button onClick={()=>{levelUp(3)}}>3</button>
            <button onClick={()=>{levelUp(4)}}>4</button>
            <button onClick={()=>{levelUp(5)}}>5</button>
            <button onClick={()=>{levelUp(6)}}>6</button>
      </div>
      </div>
    <div>
        <div>
         {
          open == true ? <Plays /> : ""
         }
        </div>
    </div>
   
    </>
  )
}

export default AllLevels
