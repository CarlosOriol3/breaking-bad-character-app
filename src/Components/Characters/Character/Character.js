import React, { useState } from 'react'
import './character.css'
import Modal from '../../Modal/Modal'

const Character = ({ character: { id, name, birthday, occupation, img, status, nickname, appearance, portrayed, category } }) => {

    const [showInfo, setShowInfo] = useState(false)

    const exitModalHandler = () => {
        setShowInfo(false)
    }

    //Filter ocupations
    const ocupations = occupation.map((oc) => `, ${oc}`)
    ocupations[0] = ocupations[0].replace(',','')

    return (
        <>
            <div className='card-container'>
                <div className='card'>
                    <div className='card-front' style={{ backgroundImage: `url(${img})`, }}></div>
                    <div className='card-back'>
                        <h1>{name}</h1>
                        <hr />
                        <div className='character-info'>
                            <p>NickName:</p>
                            <h3>{nickname}</h3>
                            <p>Portrayed by:</p>
                            <h3>{portrayed}</h3>
                            <p>Status:</p>
                            <h3>{status}</h3>
                            <p className='see-more' onClick={() => setShowInfo(true)} >See More</p>
                        </div>
                    </div>
                </div>
            </div >
            <Modal show={showInfo} clicked={exitModalHandler}>
                <img src={img} alt={name}  ></img>
                <ul>
                    <li><h1 className='modal-name'>{name}</h1></li>
                    <hr />
                    <li>Nickname: {nickname}</li>
                    <li>Portrayed by: {portrayed}</li>
                    <li>Ocupation(s): {<span>{ocupations}</span>}</li>
                    <li>Birthday: {birthday}</li>
                    <li>Status: {status}</li>
                    <li>Appears in: {category}</li>
                </ul>
            </Modal>
        </>

    )
}




export default Character 