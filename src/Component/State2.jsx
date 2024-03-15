import React, { useState } from 'react'

const State2 = () => {
    const[day, setDay]= useState("Thursday")
    const[activity, setAct] = useState("coding") 
const changeMe = () => {
    setDay("Friday")
    setAct("TGIF")
}


  return (
    <div>
        <h3>Today is {day}, {activity} All day</h3>
        <button onClick={changeMe}>Change me</button>
    </div>
  )
}

export default State2