import React, { useState } from 'react'

import './search.css'

const Search = ({getSearch}) => {
    const [search, setSearch] = useState('')

    const changeHandler = (searchValue) => {
        setSearch(searchValue)
        getSearch(searchValue)
    }
    return (
        <div className='search-container'>
            <form className='search-form'>
                <input 
                className='search-text' 
                type='text' 
                placeholder='Search Character' 
                autoFocus
                value={search}
                onChange={(event) => changeHandler(event.target.value)} />
            </form>
        </div>
    )
}

export default Search 