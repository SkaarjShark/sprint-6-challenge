import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './CharacterTeacher'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [characters, setCharacters] = useState([]);

  const getData = async () => {
    const planets = await axios.get(urlPlanets);
    const people = await axios.get(urlPeople);
    const data = people.data.map((person) => {
      const planet = planets.data.find((planet) => planet.id === person.homeworld);
      return {
        ...person,
        planet: planet.name,
      };
    });
    setCharacters(data);
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {characters.map((character, index) => (
        <Character
          key={index}
          character={character}
        />
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App