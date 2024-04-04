import React from 'react'

const Button = ({type,handleClick}) => {
  return (
    
      <button onClick={(event)=>{handleClick(event.target.innerText)}}>{type}</button>
   
  )
}

export default Button
