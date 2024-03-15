import React from 'react'
import { useState } from 'react'

const State = () => {
const [name, setName] = useState("Mr Toheeb")

const [job, setJob] = useState("Web Developer")

const [accBal, setAccBal] = useState("2000")

const coronation =() => {
    setName("Chief Toheeb")
    setJob("Bashorun")
    setAccBal("50000")

}

  return (
    <div>
        <h2>My name is {name}, i am a {job}, my account balance is {accBal}</h2>
        <button onClick={coronation}>Coronation</button>
    </div>
  )
}

export default State