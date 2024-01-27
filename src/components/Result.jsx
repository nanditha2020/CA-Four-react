import React from 'react'
import '../App.css'
export default function Result(props) {
  const restart=()=>{
    window.location.reload()
  }
  return (
    <div className='flex'>
    <div className='ResultDiv'>
      <h1>Final Results</h1>
      <h2>You scored {props.data} out of 5 </h2>
      <h3>  {props.data/5*100}% out of 100% </h3>
      <button onClick={restart}>Restart Game</button>
    </div>
    </div>
  )
}