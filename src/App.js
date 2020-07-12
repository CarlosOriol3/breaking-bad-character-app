import React, { useState, useEffect } from 'react';

import axios from 'axios'

import './App.css';

import Header from './Components/Header/Header'
import CharacterGrid from './Components/Characters/CharacterGrid'

function App() {

  const [characters, setCharacters] = useState([])

  const [isLoading, setIsLoading] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)
      console.log(result.data)
      setCharacters(result.data)
      setIsLoading(false)
    }
    fetchCharacters()

  }, [])

  return (
    <div className="App">
      <Header />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
