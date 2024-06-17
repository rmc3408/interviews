import React, { useEffect, useState } from 'react'
import { CLASS_LIST } from './consts.js';
import CharacterCard from './CharacterCard.js';

const classCharacter = Object.keys(CLASS_LIST)


/**
 * This is the CLASSMatching component which verify each attribute level up to a new CLASS
 */ 
function ClassMatching({ userAttribute }) {
  const [players, setPlayer] = useState(Array.from({length: classCharacter.length}).fill(false))
  const [characterEnable, setCharacterEnable] = useState('')
  
  // Function check each attribute of CLASSLIST matches with current player attribute 
  // TODO: Function is BigO(n^2) -> Refactor to speed when have time
  const verifyPlayer = () => {
    let characterLevelUp = [...players];

    for (let i = 0; i < characterLevelUp.length; i++) {

      const characterMinimun = Object.values(CLASS_LIST[classCharacter[i]])

      for (let j = 0; j < userAttribute.length; j++) {
        if (characterMinimun[j] > userAttribute[j]) {
          characterLevelUp[i] = false
          break
        }
        if (j === userAttribute.length - 1) characterLevelUp[i] = true
      }
    }
    setPlayer(characterLevelUp)
  }

  // TASK 3 - Once click on the player character, open an alert with unformatted attributes Object
  const displayCharacterInfo = (idx) => {
    setCharacterEnable(classCharacter[idx])
  }

  useEffect(() => {
    verifyPlayer()
  }, [userAttribute])

  return (
    <div>
    <h1>Player Level UP to Character</h1>
      {[...players].map((item, idx) => <h3 key={idx} onClick={() => displayCharacterInfo(idx)} className='App-cursor'>
          {item ? '👍' : null}{classCharacter[idx]}{item ? '👍' : null}
        </h3>)}
      {characterEnable === '' ? null : <CharacterCard 
        character={characterEnable}
        attributes={CLASS_LIST[characterEnable]} 
        setClose={setCharacterEnable} />}
  </div>)
}

export default ClassMatching