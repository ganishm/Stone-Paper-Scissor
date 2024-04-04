import './App.css'
import Rock from "./assets/Rock.jpg"
import Paper from "./assets/paper.jpg"
import Scissor from "./assets/Scissor.jpg"
import ChoiceBox from './components/ChoiceBox'
import Button from "./components/Button"
import { useState } from 'react'

import MoveAudio from "./assets/move.mp3";
import LoseAudio from "./assets/Lose.wav";
import WinAudio from "./assets/win.wav";



function App() {
  let [cmpChoice,setcmpChoice]=useState("Rock");
  let [userChoice,setuserChoice]=useState("Rock");
  let choiceArr=["Rock","Paper","Scissor"];
  let [userScore,setuserScore]=useState(0);
  let [cmpScore,setcmpScore]=useState(0);
  
  function handleClick(string){
    // console.log(string);
    // console.log("Inside Handle Click");
    let playSound=new Audio(MoveAudio);
    playSound.play();
    let comp=Math.floor(Math.random()*3);
    // console.log(comp,choiceArr[comp]);
    setcmpChoice(choiceArr[comp]);

    for(let i in choiceArr){
      if(choiceArr[i]===string){
        setuserChoice(choiceArr[i]);
      }
    }

    CheckWin(userChoice,cmpChoice);

    // console.log(userChoice,cmpChoice);
  }
  function CheckWin(userChoice,cmpChoice){
    if(userChoice===cmpChoice){
      console.log("Equal choices");
      return;
    }
    if((userChoice==="Rock" && cmpChoice==="Paper")||(userChoice==="Paper" && cmpChoice==="Scissor")||(userChoice==="Scissor" && cmpChoice==="Rock")){
      let playSound=new Audio(LoseAudio);
      playSound.play();
      let newScore=userScore+1;
      setcmpScore(newScore);
      console.log("Computer won")
    }else{
      let playSound=new Audio(WinAudio);
      playSound.play();
      let newScore=userScore+1;
      setuserScore(newScore);
      console.log("user won");
    }
    

  }

  function Reset(){
    console.log(userChoice,cmpChoice);
    setcmpScore(0);
    setuserScore(0);
    
    setcmpChoice("");
    setuserChoice("");
    console.log(userChoice,cmpChoice);
  }
return (

    <>
    <div className="body">
    <div className="compScore score">
      Computer's Score :{cmpScore}
    </div>
    <div className="usersScore score">
      Your Score :{userScore}
    </div>
    <button className=" resetbtn " onClick={Reset}>Reset</button>

    <div className="playContainer">

    <div className="box1">
    {/* computer's choice box */}
    <ChoiceBox choice={cmpChoice}/>
    {/* user's Choice box */}
    <ChoiceBox choice={userChoice}/>
    </div>

    <div className="computerChoice">
      Computer's Choice is:{cmpChoice}
    </div>


    <div className="buttonContainer">
    <Button type="Rock"  handleClick={handleClick}/>
    <Button type="Paper" handleClick={handleClick}/>
    <Button type="Scissor" handleClick={handleClick}/>
    </div>
    </div>

    </div>
    </>
  )
}

export default App
