import React from 'react'
import './character-grid.css'

import Character from './Character/Character'
import Loading from '../Loading/Loading'

const CharacterGrid = (props) => {

    return (
        <>
            {props.isLoading ? <Loading />  : <div className='character-grid'>{props.characters.map((character)=><Character character={character} key={character.char_id} /> )} </div>}
        </>
    )
}

export default CharacterGrid