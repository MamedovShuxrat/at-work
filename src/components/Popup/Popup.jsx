import React from 'react'
import closeIcon from '../../assets/icons/Cross.svg';
import successImg from '../../assets/images/success.png'
import './popup.scss'
const Popup = ({ message, onClose }) => {
    return (
        <div className='popup'>
            <div className="popup__content">
                <button class="popup__close" onClick={onClose}>
                    <img width={24} height={24} src={closeIcon} alt="close Icon" />
                </button>
                <img width={59} height={59} src={successImg} alt="иконка модального окна" />
                <p className="popup__message">
                    Изменения сохранены!
                </p>
            </div>
        </div>
    )
}

export default Popup

