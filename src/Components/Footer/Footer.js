import React from 'react'
import './footer.css'

const Footer = () =>
    <footer className='footer'>
        <hr />
        <p>© 2020 Carlos A. Oriol Rivera. All rights reserved.</p>
        <p>Data retrieved from: <a href='https://breakingbadapi.com/' target='blank' className='api-link'>The Breaking Bad API</a></p>
        <div>Code:</div>
        <a href='https://github.com/CarlosOriol3/breaking-bad-character-app' target='blank'>
            <img className='github-logo' src={process.env.PUBLIC_URL + '/gitHubLogo.png'} alt='Github' />
        </a>
    </footer>

export default Footer 