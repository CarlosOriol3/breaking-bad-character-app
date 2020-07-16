import React from 'react'
import './modal.css'

import Backdrop from '../Backdrop/Backdrop'


const Modal = (props) => (
    <>
        <div className='modal'
            style={{
                transform: props.show ? 'translateY(-20vh)' : 'translateY(-300vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
        <Backdrop show={props.show} clicked={props.clicked} />
    </>
)


export default Modal 