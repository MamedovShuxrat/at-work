import React, { useEffect, useRef, useState } from 'react'
import './Card.scss'
import cardImg from '../../assets/images/avatar.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { archiveUser, hideUser, activateUser } from '../../store/slices/usersSlice'

const Card = ({ user, isArchived }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])
    console.log(isMenuOpen);

    return (
        <div className="card">
            <div className="card__visual">
                <img className='card__img' src={cardImg} alt="Аватарка карточки" />
            </div>
            <div className="card__content">
                <div className="card__top">
                    <p className="card__name">{user?.name || 'Имя не указано'}</p>
                    {!isArchived && (
                        <div className="card__btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <clipPath id="clip11_6950">
                                        <rect id="Solid" rx="0.000000" width="23.000000" height="23.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0" />
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clip11_6950)">
                                    <path id="Vector" d="M10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.89 13.1 16 12 16C10.9 16 10 16.89 10 18ZM10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.89 13.1 4 12 4C10.9 4 10 4.89 10 6ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.89 13.1 10 12 10C10.9 10 10 10.89 10 12Z" fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero" />
                                </g>
                            </svg>
                            {isMenuOpen && (
                                <div className="card__menu" ref={menuRef}>
                                    <button
                                        className="card__link"
                                        onClick={() => navigate(`/edit/${user.id}`)}
                                    >
                                        Редактировать
                                    </button>
                                    <button
                                        className="card__link"
                                        onClick={() => dispatch(archiveUser(user.id))}
                                    >
                                        Архивировать
                                    </button>
                                    <button
                                        className="card__link"
                                        onClick={() => dispatch(hideUser(user.id))}
                                    >
                                        Скрыть
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    {isArchived && (
                        <div className="card__btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <clipPath id="clip11_6950">
                                        <rect id="Solid" rx="0.000000" width="23.000000" height="23.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0" />
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clip11_6950)">
                                    <path id="Vector" d="M10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.89 13.1 16 12 16C10.9 16 10 16.89 10 18ZM10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.89 13.1 4 12 4C10.9 4 10 4.89 10 6ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.89 13.1 10 12 10C10.9 10 10 10.89 10 12Z" fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero" />
                                </g>
                            </svg>
                            {isMenuOpen && (
                                <div className="card__menu" ref={menuRef}>
                                    <button
                                        className="card__link"
                                        onClick={() => dispatch(activateUser(user.id))}
                                    >
                                        Активировать
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="card__company">{user?.company.name}</div>
                <div className="card__city">{user?.address.city}</div>
            </div>
        </div>
    )
}

export default Card