import React, { useState, useEffect } from 'react';

import axios from 'axios'

import './App.css';

import Header from './Components/Header/Header'
import CharacterGrid from './Components/Characters/CharacterGrid'
import Search from './Components/Search/Search'

function App() {

  const [characters, setCharacters] = useState([])

  const [isLoading, setIsLoading] = useState([])

  const [nameSearch,setNameSearch] = useState('')

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${nameSearch}`)
      //console.log(result.data)
      setCharacters(result.data)
      setIsLoading(false)
    }
    fetchCharacters()

  }, [nameSearch])

  return (
    <div className="App">
      <Header />
      <Search getSearch={(searchValue) => setNameSearch(searchValue)} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
