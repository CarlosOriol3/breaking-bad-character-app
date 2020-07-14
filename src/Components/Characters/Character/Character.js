import React from 'react'
import './character.css'


const Character = (props) => {
    return (
        <div className='card-container'>
            <div className='card'>
                <div className='card-front' style={{ backgroundImage: `url(${props.img})`, }}></div>
            <div className='card-back'><h1>{props.name}</h1> </div>
        </div>
    </div >
    )
}




export default Character 