import React, { useState } from 'react'
import './App.css'
import Plays from './Plays'
import AllLevels from './componets/AllLevels.js'

function App() {

  let [clicks,setClicks] = useState(false);
  let [level,setlevel] = useState(false);

  function ClicktoPlays(){
    if(clicks === false){
      setClicks(true);
    }else{
      setClicks(false);
    }
  }
  
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
      <h2 onClick={ClicktoPlays}>Plays</h2>
    </div>
    <div className={clicks || level === true ? 'none' : 'margins'}>
      <h2 onClick={LevelsCliks}>Levels</h2>
    </div>
    <div>{
      clicks == true ? <Plays/> : ""  
      }</div>
      <div>
        {
          level == true ? <AllLevels/> : ""
        }
      </div>
    </div>
  )
}

export default App
