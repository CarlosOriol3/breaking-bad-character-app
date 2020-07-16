import React, { useState } from 'react'

import './search.css'

const Search = ({ getSearch, getParameter }) => {
    const [search, setSearch] = useState('')

    const changeHandler = (searchValue) => {
        setSearch(searchValue)
        getSearch(searchValue)
    }
    return (
        <div className='search-container'>
            <form className='search-form'>
                <span className='search-by-label'>Search By:</span>
                <select className='form-select' onChange={getParameter}>
                    <option value='name' >Character Name</option>
                    <option value='nickname' >Character NickName</option>
                    <option value='portrayed' >Actor</option>
                </select>
                <input
                    className='search-text'
                    type='text'
                    placeholder='Search Character'
                    autoFocus
                    value={search}
                    onChange={(event) => changeHandler(event.target.value)}
                />
            </form>
        </div>
    )
}

export default Search 