import React, { useState } from 'react'
import './App.css'
import Plays from './Plays'
import AllLevels from './componets/AllLevels.js'
let block ;
let add;
function App() {

  let [clicks,setClicks] = useState(false);
  let [level,setlevel] = useState(false);
  let pageon =  sessionStorage.getItem("backpages");
  let realfirst = JSON.parse(pageon);
        
        
  if(realfirst === null || realfirst){
     block  = false;
  }else {
    block = false
  }
  let [back,setback] = useState(block)

  function ClicktoPlays(){
    if(clicks === false){
      setClicks(true);
      setback(true);
    }else{
      setClicks(false);
      setback(false);
    }
  }
  
  let Winlevel1 = localStorage.getItem("winners")
  let reallevel1 = JSON.parse(Winlevel1)
  
  let data = reallevel1 == null || reallevel1 === 11 ? 0 : reallevel1;
  
  function LevelsCliks(){
    if(level === false){
      setlevel(true);
      setback(true)
    }else{
      setlevel(false);
      setback(false);
    }
  }
  return (
    <div>
    <div>{}</div>
                      
    <div className={(clicks || level) && back === true ? 'none' : 'margins block'}>
      <h2 onClick={ClicktoPlays}>Play</h2>
    </div>
    <div className={(clicks || level) && back === true ? 'none' : 'margins block'}>
      <h2 onClick={LevelsCliks}>Level</h2>
    </div>
    <div>{
      clicks === true ? <Plays  leves = {data}/> : ""  
      }</div>
      <div>
        { 
          level === true ? <AllLevels/> : ""
        }
      </div>
    </div>
  )
}

export default App
