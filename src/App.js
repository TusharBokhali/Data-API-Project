import React, { useState } from 'react'
import './App.css'
import Plays from './Plays'
import AllLevels from './componets/AllLevels.js'
let block;
let add;
function App(props) {

  let [clicks, setClicks] = useState(false);
  let [level, setlevel] = useState(false);
  let realfirst = sessionStorage.getItem("backpages");
  let page =  realfirst === null ? 'Home': realfirst;
  const [openScreen, setOpenScreen] = useState("Home");
  // let realfirst = JSON.parse(pageon);


  if (realfirst === null || realfirst) {
    block = false;
  } else {
    block = false
  }
  

  function ClicktoPlays() {
    if (clicks === false) {
      setClicks(true);
      setOpenScreen("Play")
    } else {
      setClicks(false);
    }
  }

  let Winlevel1 = localStorage.getItem("winners")
  let reallevel1 = JSON.parse(Winlevel1)

  let data = reallevel1 == null || reallevel1 === 11 ? 0 : reallevel1;

  function LevelsCliks() {
    if (level === false) {
      setlevel(true);
     
      setOpenScreen("Level")
    } else {
      setlevel(false);
      
    }
  }
  return (
    <div>
      {
        openScreen === "Home" ? <div>
          <div className={clicks || level  === true ? 'none' : 'margins block'}>
            <h2 onClick={ClicktoPlays}>Play</h2>
          </div>
          <div className={clicks || level === true ? 'none' : 'margins block'}>
            <h2 onClick={LevelsCliks}>Level</h2>
          </div>
        </div> : ""
      }

      {
        openScreen === "Level" ? <AllLevels /> : ""
      }

      {
        openScreen === "Play" ? <Plays leves={data} /> : ""
      }

    </div>
  )
}

export default App
