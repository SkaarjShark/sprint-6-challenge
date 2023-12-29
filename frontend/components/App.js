import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [data, setData] = useState([])

  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    axios.all([axios.get(urlPlanets), axios.get(urlPeople)])
      .then(axios.spread((planet, people) => {
        const myArray = []
        for (let i = 0; i < people.data.length; i++) {
          for (let j = 0; j < planet.data.length; j++) {
            if (people.data[i].homeworld === planet.data[j].id) {
              people.data[i].homeworld = planet.data[j]
              myArray.push(people.data[i])
            }       
          }
        }
        setData(myArray)
      }))
      .catch(err => {
        console.log(err)
      })
  }, [])

  console.log(data)
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {data.map((character, idx) => (
        <Character 
          key={idx}
          character={character}
        />
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
