import React, { forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { activateUser, hideUser, archiveUser } from '../../store/slices/usersSlice'

const CardMenu = forwardRef(({ type, userId, }, menuRef) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className="card__menu" ref={menuRef}>
            {type === 'edit' && (<>
                <button
                    className="card__link"
                    onClick={() => navigate(`/edit/${userId}`)}
                >
                    Редактировать
                </button>
                <button
                    className="card__link"
                    onClick={() => dispatch(archiveUser(userId))}
                >
                    Архивировать
                </button>
                <button
                    className="card__link"
                    onClick={() => dispatch(hideUser(userId))}
                >
                    Скрыть
                </button>
            </>
            )}
            {type === 'activate' && (
                <button
                    className="card__link"
                    onClick={() => dispatch(activateUser(user.id))}
                >
                    Активировать
                </button>
            )}
        </div>
    )
})

export default CardMenu