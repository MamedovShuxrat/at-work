import React from 'react'
import avatar from '../../assets/images/avatar.png'
import './userMenu.scss'
const UserMenu = () => {
    return (
        <div className="user">
            <div className="user__avatar">
                <img className='user__img' src={avatar} alt="Аватарка пользователья" />
            </div>
            <div className="user__name">Ivan1234</div>
        </div>
    )
}

export default UserMenu