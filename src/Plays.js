import React, { useState } from "react";
import "./componets/levely.css";
import level1 from "./question.png";
import level2 from "./Level2.png";
import level3 from "./level3.png";
import level4 from "./Levels4.png";
import level5 from "./levels5.png";
import level6 from "./levels6.png";
import level7 from "./levels7.png";
import level8 from "./levels8.png";
import level9 from "./levels9.png.jpg";
import level10 from "./levels10.png.jpg";
import level11 from "./levels11.png.jpg";
import level12 from "./levvels7.png";
import level13 from "./congra.png";
import Winners from "./componets/Winners";
import App from './App'
let nextLev = 0;
let str = "";
let repeatNumber = 0;
let arr = [];
let pagechange = false;
function Levels(props) {
  
  nextLev = props.leves;
  let nonerepeat = localStorage.getItem("repeat");
  repeatNumber = nonerepeat == null ? 0 : nonerepeat;

  let Images = [
    { img: level1, Ans: 0, lev: "level 1" },
    { img: level2, Ans: 96, lev: "level 2" },
    { img: level3, Ans: 190, lev: "level 3" },
    { img: level4, Ans: 165, lev: "level 4" },
    { img: level5, Ans: 17, lev: "level 5" },
    { img: level6, Ans: 6, lev: "level 6" },
    { img: level7, Ans: 5, lev: "level 7" },
    { img: level8, Ans: 5, lev: "level 8" },
    { img: level9, Ans: 32, lev: "level 9" },
    { img: level10, Ans: 6, lev: "level 10" },
    { img: level11, Ans: 2, lev: "level 11" },
    { img: level12, Ans: 7, lev: "level 12" },
    { img: level13, Ans: null, lev: "Congratulations" },
  ];

  if (nextLev === Images.length - 1) {
    nextLev = 0;
    next = 0;
  }
  // console.log(nextLev);

  let [values, setvalues] = useState("");
  let [win, Setwin] = useState(nextLev);
  let [next, setnext] = useState(nextLev);
  let [cong, setCong] = useState(false);
  let [Show, setShow] = useState(false);
  function inputboxvalue(num) {
    num = String(values + num);
    setvalues(num);
  }



  function GetValues() {
    if (values == Images[win].Ans) {
         setShow(true)
         Setwin(win + 1);
         setnext(next + 1);     
        } else {
          alert("Answers Is Wrongs!!");
        }
    setvalues("");

    if (Images.length - 2 === win) {
      alert("congratulations For All Level Wins!!");
      setCong(true);
      repeatNumber++;
      localStorage.setItem("repeat", JSON.stringify(repeatNumber));
    }
  }
 
  function Nexts(){
    
    setShow(false)
  }

  if (repeatNumber === 0) {
    if (next > nextLev) {
      localStorage.setItem("winners", JSON.stringify(next));
    }
  }

  function changes(){
    sessionStorage.setItem("backpages",'Home');
    window.location.href = "Home.html";
  }

  function skips() {
    if (repeatNumber === 0) {
      arr.push(win + 1);

      localStorage.setItem("skips", JSON.stringify(arr));
      setnext(++next);
      Setwin(win + 1);
    }
  }

  return (
    <>
      <div className= {Show === true ? 'none' : "All-Content-game"}>
        <div className={cong == true ? "none" : "ends"}>
          <div className="back" onClick={changes}>Back</div>
          <div className="Skip" onClick={skips}>
            Skip
          </div>
        </div>
        <div className="All-content">
          <h1>{Images[win].lev}</h1>
          <div className="problems">
            <img
              src={Images[win].img}
              alt=""
              width={
                win + 1 === 6 ||
                win + 1 === 7 ||
                win + 1 === 8 ||
                win + 1 === 12
                  ? "150%"
                  : "60%"
              }
            />
          </div>
          <div className={cong === true ? "none" : "container"}>
            <div className="All-inputs">
              <input type="text" value={values} />
              <div>
                <button onClick={() => inputboxvalue(1)}>1</button>
                <button onClick={() => inputboxvalue(2)}>2</button>
                <button onClick={() => inputboxvalue(3)}>3</button>
                <button onClick={() => inputboxvalue(4)}>4</button>
                <button onClick={() => inputboxvalue(5)}>5</button>
                <button onClick={() => inputboxvalue(6)}>6</button>
                <button onClick={() => inputboxvalue(7)}>7</button>
                <button onClick={() => inputboxvalue(8)}>8</button>
                <button onClick={() => inputboxvalue(9)}>9</button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setvalues("");
                  }}
                >
                  X
                </button>
                <button onClick={() => inputboxvalue(0)}>0</button>
                <button onClick={GetValues}>Enter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Show === true ? 'block' :'none'}>
        
         <div  className='All-page'>
         <div className="all-container">
             <div>
                 <img src="https://www.shutterstock.com/image-vector/stage-podium-lighting-scene-award-260nw-2274439035.jpg" alt="" />
             </div>
             <div className="flexibles">
                 <button  onClick={()=>{ window.location.href = "Home.html";}}>Back</button>
                 <button  onClick={Nexts}>Next</button>
             </div>
         </div>
     </div> 
      </div>
    </>
  );
}

export default Levels;
