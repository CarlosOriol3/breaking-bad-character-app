import React from 'react'
import './character-grid.css'

import Character from './Character/Character'
import Loading from '../Loading/Loading'

const CharacterGrid = (props) => {

    return (
        <>
            {props.isLoading ? <Loading />  : <div className='character-grid'>{props.characters.map((character)=><Character key={character.char_id} name={character.name} nickname={character.nickname} portrayed={character.portrayed} status={character.status} img={character.img}/> )} </div>}
        </>
    )
}

export default CharacterGrid