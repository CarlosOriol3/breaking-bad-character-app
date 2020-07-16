import React, { useState } from 'react'
import './category.css'



const Category = ({ searchCategory }) => {
    const [selected, setSelected] = useState(['selected', '', ''])

    return (
        <>
            <h2 className='category-title'>Get Characters From:</h2>
            <div className='buttons-container'>
                <button className='category-button' id={selected[0]} onClick={() => { searchCategory(''); setSelected(['selected', '', '']) }}>Both Shows</button>
                <button className='category-button' id={selected[1]} onClick={() => { searchCategory('Breaking Bad'); setSelected(['', 'selected', '']) }}><img className='button-logo' src={process.env.PUBLIC_URL + '/BBLogo.png'} alt='Breaking Bad'></img></button>
                <button className='category-button' id={selected[2]} onClick={() => { searchCategory('Better Call Saul'); setSelected(['', '', 'selected']) }}><img className='button-logo' src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Better_Call_Saul_logo.svg/1920px-Better_Call_Saul_logo.svg.png' alt='Better Call Saul'></img></button>
            </div>
        </>

    )
}
export default Category