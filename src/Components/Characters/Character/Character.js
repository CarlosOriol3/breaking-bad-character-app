import React from 'react'
import './character.css'


const Character = (props) => {
    return (
        <div className='card-container'>
            <div className='card'>
                <div className='card-front' style={{ backgroundImage: `url(${props.img})`, }}></div>
                <div className='card-back'>
                    <h1>{props.name}</h1>
                    <hr />
                    <div className='character-info'>
                        <p>NickName:</p>
                        <h3>{props.nickname}</h3>
                        <p>Portrayed by:</p>
                        <h3>{props.portrayed}</h3>
                        <p>Status:</p>
                        <h3>{props.status}</h3>
                    </div>
                </div>
            </div>
        </div >
    )
}




export default Character 