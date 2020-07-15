import React, { useState, useEffect } from 'react';

import axios from 'axios'

import './App.css';

import Header from './Components/Header/Header'
import CharacterGrid from './Components/Characters/CharacterGrid'
import Search from './Components/Search/Search'
import Category from './Components/Category/Category'

function App() {

  const [characters, setCharacters] = useState([])

  const [isLoading, setIsLoading] = useState([])

  const [nameSearch, setNameSearch] = useState('')

  const [categorySearch, setCategorySearch] = useState('')

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${nameSearch}`)
      //console.log(result.data)
      if (categorySearch === 'Better Call Saul') {
        const searchResult = result.data.filter((char) => (char.category === categorySearch || char.category === 'Breaking Bad, ' + categorySearch))
        setCharacters(searchResult)
        setIsLoading(false)
      } else if (categorySearch === 'Breaking Bad') {
        const searchResult = result.data.filter((char) => (char.category === categorySearch || char.category === categorySearch + ', Better Call Saul'))
        setCharacters(searchResult)
        setIsLoading(false)
      }
      else {
        setCharacters(result.data)
        setIsLoading(false)
      }
      console.log(result.data)
    }
    fetchCharacters()

  }, [nameSearch, categorySearch])

  return (
    <div className="App">
      <Header />
      <Search getSearch={(searchValue) => setNameSearch(searchValue)} />
      <Category searchCategory={(category) => setCategorySearch(category)} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
