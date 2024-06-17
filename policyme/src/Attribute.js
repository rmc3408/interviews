import React, { useState } from 'react'
import { ATTRIBUTE_LIST } from './consts.js';


// Helper function to calculate Modifier based on Attribute
// Each 2 points, Add or reduce 1 point.
function modifierTwoPoints(value) {
  return Math.floor((value - 10) / 2)
}

/**
 * This is the Attribute component including modifier feature
 */
function Attribute({ exportAttributes, exportModifier }) {
  const [attribute, setAttribute] = useState(Array.from({ length: ATTRIBUTE_LIST.length}).fill(10));
  const [modifier, setModifier] = useState(Array.from({ length: ATTRIBUTE_LIST.length }).fill(0));

  
  // function to calculate Atribute TASK 01
  // calculate modifier TASK 04
  // Export Attribute to another component
  const modifyAttributeModifier = (index, operation) => {
    const newAttributeList = [...attribute]
    const newModifierList = [...modifier]

    if (operation == 'addition') newAttributeList[index]++
    if (operation == 'substraction') newAttributeList[index]--

    const value = modifierTwoPoints(newAttributeList[index])
    newModifierList[index] = value
    
    setModifier(newModifierList)
    setAttribute(newAttributeList)
    exportAttributes(newAttributeList)
    exportModifier(newModifierList)
  }

  return <div>
    <h2>Player Attribute Builder</h2>

    {ATTRIBUTE_LIST.map((att, index) => ( 
      <div key={index} className='Attribute-group-container'>
        <div className='Attribute-points-container'>
          <div>
            {att}: { attribute[index] }
            <button onClick={() => modifyAttributeModifier(index, 'addition')}>+</button>
            <button onClick={() => modifyAttributeModifier(index, 'substraction')}>-</button>
          </div>
          <div>
            -- modifier: { modifier[index] }
          </div>
        </div>
      </div>
    ))}
  </div>
}

export default Attribute