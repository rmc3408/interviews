import React, { useEffect } from 'react'
import { SKILL_LIST } from './consts.js';


function Skills({ userModifier }) {

  
  useEffect(() => { 
    //make math based of userModifier
    console.log(userModifier)
  }, [userModifier])

  return (
    <div><h3>subtask 1 - total Point</h3></div>
  )
}

export default Skills