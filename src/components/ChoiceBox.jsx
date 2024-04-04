import React from 'react'
import Paper from "../assets/paper.jpg"
import Rock from  "../assets/Rock.jpg"
import Scissor from  "../assets/Scissor.jpg"

const ChoiceBox = (props) => {
  let choice=props.choice;

  return (
    <div className='choiceBoxContainer'>


    {choice==="Rock" && <img src={Rock} alt="" className='image' />}
    {choice==="Paper" && <img src={Paper} alt="" className='image' />}
    {choice==="Scissor" && <img src={Scissor} alt="" className='image' />}
      
    </div>
  )
}

export default ChoiceBox
