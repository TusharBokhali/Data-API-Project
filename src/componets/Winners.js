import React, { useState } from 'react'
import "./levely.css";
function Winners() {

    let [next,setnext] = useState(false)
    function  nextround(){
       setnext(true)
    }

    function HomeBack(){
        window.location.href = "Home.html";
    }

  return (
    <div  className='All-page'>
        <div className="all-container">
            <div>
                <img src="https://www.shutterstock.com/image-vector/stage-podium-lighting-scene-award-260nw-2274439035.jpg" alt="" />
            </div>
            <div className="flexibles">
                <button onClick={HomeBack}>Back</button>
                <button onClick={nextround}>Next</button>
            </div>
            {next == true ? sessionStorage.setItem("nextpag",JSON.stringify(next)) : ""}
        </div>
    </div>
  )
}

export default Winners
