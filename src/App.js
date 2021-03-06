import React, { useState, useEffect } from 'react';

import axios from 'axios'

import './App.css';

import Header from './Components/Header/Header'
import CharacterGrid from './Components/Characters/CharacterGrid'
import Search from './Components/Search/Search'
import Category from './Components/Category/Category'
import Footer from './Components/Footer/Footer'
// import Loading from './Components/Loading/Loading';

function App() {

  const [characters, setCharacters] = useState([])

  const [characterfilter, setCharacterFilter] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const [parameter, setParameter] = useState('name')

  const [nameSearch, setNameSearch] = useState('')

  const [categorySearch, setCategorySearch] = useState('')

  // const characterFilter = (par) => {

  // }
  useEffect(() => {

    axios(`https://www.breakingbadapi.com/api/characters`)
      .then((result) => { setCharacters(result.data) })
      .catch((err) => { console.log('error') })
      .then(setTimeout(() => {
        setIsLoading(false)
      }, 800))
  }, [])

  // useEffect(() => {

  //   const fetchCharacters = async () => {

  //     const result = await axios(`https://www.breakingbadapi.com/api/characters`)
  //     setCharacters(result.data)
  //   }

  //   fetchCharacters()



  // }, [])

  useEffect(() => {
    //console.log(result.data)
    // setIsLoading(false)

    if (categorySearch === 'Better Call Saul') {
      const searchResult = characters.filter(((char) => (char.category === categorySearch || char.category === 'Breaking Bad, ' + categorySearch) && char[parameter].toLowerCase().includes(nameSearch.toLowerCase())))
      setCharacterFilter(searchResult)
      //setIsLoading(false)
    } else if (categorySearch === 'Breaking Bad') {
      const searchResult = characters.filter((char) => ((char.category === categorySearch || char.category === categorySearch + ', Better Call Saul') && char[parameter].toLowerCase().includes(nameSearch.toLowerCase())))
      setCharacterFilter(searchResult)
      // setIsLoading(false)
    }
    else {
      const searchResult = characters.filter((char) => (char[parameter].toLowerCase().includes(nameSearch.toLowerCase())))
      setCharacterFilter(searchResult)
      // setIsLoading(false)
    }
    //console.log(result.data)
    // setIsLoading(false)
  }, [nameSearch, categorySearch, parameter, characters])

  return (
    <div className="App">
      <div className='content-wrap'>
        <Header />
        <Search getSearch={(searchValue) => setNameSearch(searchValue)} getParameter={(e) => setParameter(e.target.value)} />
        <Category searchCategory={(category) => setCategorySearch(category)} />
        <CharacterGrid isLoading={isLoading} characters={characterfilter} />
        <Footer />
      </div>

    </div>
  );
}

export default App;
