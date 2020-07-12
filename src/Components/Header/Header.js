import React from 'react'

import './header.css'

const Header = () => {

    return (
        <header className='header-component'>
            <img className='header-logo' src={process.env.PUBLIC_URL + '/BBLogo.png'} alt='Breaking Bad'></img>
        </header>
    )
}

export default Header 