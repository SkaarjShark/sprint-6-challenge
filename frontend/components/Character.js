import React, {useState} from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [selected, setSelected] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
      <div 
        onClick={() => setSelected(!selected)} 
        className="character-card"
      >
        <h3 className="character-name">{props.character.name}</h3>
        {selected && ( 
          <p>
              Planet:
              <span className="character-planet">{props.character.homeworld.name}</span>
          </p>
        )}
    </div>
  )
}

export default Character
