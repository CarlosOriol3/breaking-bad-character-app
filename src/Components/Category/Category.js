import React, { useState } from 'react'
import './category.css'



const Category = ({ searchCategory }) => {
    const [selected, setSelected] = useState(['selected', '', ''])

    return (
        <div className='buttons-container'>
            <button className='category-button' id={selected[0]} onClick={() => { searchCategory(''); setSelected(['selected', '', '']) }}>All</button>
            <button className='category-button' id={selected[1]} onClick={() => { searchCategory('Breaking Bad'); setSelected(['', 'selected', '']) }}>Breaking Bad</button>
            <button className='category-button' id={selected[2]} onClick={() => { searchCategory('Better Call Saul'); setSelected(['', '', 'selected']) }}>Better Call Saul</button>
        </div>
    )
}
export default Category