import React from 'react'
import './character-grid.css'

import Character from './Character/Character'
const CharacterGrid = (props) => {

    return (
        <div>
            {props.isLoading ? <p>Loading...</p>: <div className='character-grid'>{props.characters.map((character)=><Character key={character.char_id} name={character.name} nickname={character.nickname} portrayed={character.portrayed} status={character.status} img={character.img}/> )} </div>}
        </div>
    )
}

export default CharacterGrid