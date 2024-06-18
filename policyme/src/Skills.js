import React, { useEffect, useState } from 'react'
import { SKILL_LIST } from './consts.js';


function Skills({ userModifier }) {

  const [modifierSkill, setModifierSkill] = useState([])

  const calculateSkillModifier = (pointsArr) => {
    const skillArray = []
    for (let attributePoint of pointsArr){
      skillArray.push(10 + (4 * attributePoint))
    }
    setModifierSkill(skillArray)
  }
  
  useEffect(() => { 
    calculateSkillModifier(userModifier)
  }, [userModifier])

  return (
    <div><h3>subtask 1 - total Point</h3></div>
  )
}

export default Skills