import './App.css'
import ChoiceBox from './components/ChoiceBox'
import Button from "./components/Button"
import { useState } from 'react'




function App() {
  let [cmpChoice,setcmpChoice]=useState("Rock");
  let [userChoice,setuserChoice]=useState("Rock");
  let choiceArr=["Rock","Paper","Scissor"];
  let [userScore,setuserScore]=useState(0);
  let [cmpScore,setcmpScore]=useState(0);
  
  function handleClick(string){
    // console.log(string);
    // console.log("Inside Handle Click");
    
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

      let newScore=userScore+1;
      setcmpScore(newScore);
      console.log("Computer won")
    }else{
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
