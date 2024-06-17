import React from 'react'

function CharacterCard({ character, attributes, setClose }) {
  const listAttributes = Object.keys(attributes)

  return (
    <div className='modal'>
      <h3>More detailed about {character}</h3>
      {listAttributes.map((item, idx) => <div key={idx} className='content'><p>{item} - {attributes[item]}</p></div>)}
      <button onClick={() => setClose('')} className='App-cursor'>Close the minimum requirement</button>
    </div>
  )
}

export default CharacterCard