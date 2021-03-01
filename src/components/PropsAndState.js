import React from "react"
import {useState} from "react"

export const PropsAndState = ({ Drea }) => {
    let [countClicks, setCountClicks] = useState(0)
// line 5: updating "useState" (which is a hook), to count the clicks and set the counting of Clicks
// line 5: "setCountClicks", definintion when hovering, saying its a type of dispatch statement

    const handleClick = () => {
        //good practice:
        //make a copy of state, modifiy it, and then setState to the copy
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks)
      }

  return (
    <>
      <h3>Welcome, {Drea} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}