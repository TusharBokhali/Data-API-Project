import React, { useState } from 'react'
import './alllevels.css'
import Plays from '../Plays'
let pera = 0;
let  realskip = 0 ;
let dub = 0;
function AllLevels() {
 
  let [open,setOpen] = useState(false);

  let Winlevel = localStorage.getItem("winners")
  let reallevel = JSON.parse(Winlevel)
  
      dub = localStorage.getItem("skips") ;
      realskip = JSON.parse(dub)
      // realskip = dub 
  console.log(realskip);
  
  
  function levelUp(level){
    if(reallevel >= level || level === 0 ){
      if(open === false){
        setOpen(true);
        pera = level;

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
            <button className={realskip !==null ? realskip.includes(1)  ? 'skip' : reallevel+1>=1   ?   'active' : '': ""  } onClick={()=>{levelUp(0)}}>1</button>
            <button className={realskip !==null ? realskip.includes(2)  ? 'skip' : reallevel+1>=2   ?   'active' : '': ""  } onClick={()=>{levelUp(1)}}>2</button>
            <button className={realskip !==null ? realskip.includes(3)  ? 'skip' : reallevel+1>=3   ?   'active' : '': ""  } onClick={()=>{levelUp(2)}}>3</button>
            <button className={realskip !==null ? realskip.includes(4)  ? 'skip' : reallevel+1>=4   ?   'active' : '': ""  } onClick={()=>{levelUp(3)}}>4</button>
            <button className={realskip !==null ? realskip.includes(5)  ? 'skip' : reallevel+1>=5   ?   'active' : '': ""  } onClick={()=>{levelUp(4)}}>5</button>
            <button className={realskip !==null ? realskip.includes(6)  ? 'skip' : reallevel+1>=6   ?   'active' : '': ""  } onClick={()=>{levelUp(5)}}>6</button>
            <button className={realskip !==null ? realskip.includes(7)  ? 'skip' : reallevel+1>=7   ?   'active' : '': ""  } onClick={()=>{levelUp(6)}}>7</button>
            <button className={realskip !==null ? realskip.includes(8)  ? 'skip' : reallevel+1>=8   ?   'active' : '': ""  } onClick={()=>{levelUp(7)}}>8</button>
            <button className={realskip !==null ? realskip.includes(9)  ? 'skip' : reallevel+1>=9   ?  'active'  : '': "" } onClick={()=>{levelUp(8)}}>9</button>
            <button className={ realskip !==null ? realskip.includes(10)? 'skip' :reallevel+1>=10   ?   'active' : '': ""  } onClick={()=>{levelUp(9)}}>10</button>
            <button className={ realskip !==null ? realskip.includes(11)? 'skip' :reallevel+1>=11   ?   'active' : '': ""   } onClick={()=>{levelUp(10)}}>11</button>
            <button className={ realskip !==null ? realskip.includes(12)? 'skip' :reallevel+1>=12   ?   'active' : '': ""   } onClick={()=>{levelUp(11)}}>12</button>
      </div>""   </div>
    <div>
        <div>
         {
          open === true ? <Plays leves={pera} /> : ""
         }
        </div>
    </div>
   
    </>
  )
}

export default AllLevels
