import React, { useState } from 'react'
import './App.css'
import Plays from './Plays'
import AllLevels from './componets/AllLevels.js'

function App() {

  let [clicks,setClicks] = useState(false);
  let [level,setlevel] = useState(false);

  // sessionStorage.setItem("lvl",JSON.stringify(level))
  function ClicktoPlays(){
    if(clicks === false){
      setClicks(true);
    }else{
      setClicks(false);
    }
    
  }
  
  let Winlevel1 = localStorage.getItem("winners")
  let reallevel1 = JSON.parse(Winlevel1)

  let data = reallevel1 == null || reallevel1 === 11 ? 0 : reallevel1;
  
  
  function LevelsCliks(){
    if(level === false){
      setlevel(true);
    }else{
      setlevel(false);
    }
  }
  return (
    <div>
    <div className={clicks || level === true ? 'none' : 'margins'}>
      <h2 onClick={ClicktoPlays}>Play</h2>
    </div>
    <div className={clicks || level === true ? 'none' : 'margins'}>
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
