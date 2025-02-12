import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import mainLogo from '../../assets/images/logo.png'
import favoriteLogo from '../../assets/icons/Favorite.svg'
import notificationLogo from '../../assets/icons/Notification.svg'
import Notification from '../Notification/Notification'
import './header.scss';
import UserMenu from '../UserMenu/UserMenu'

const Header = () => {
    const [isVisible, setIsVisible] = useState(false)
    const toggleNotification = () => {
        setIsVisible(!isVisible)
    }
    return (
        <header className='header'>
            <div className="container">
                <div className="header__inner">
                    <Link to="/" className="header__logo">
                        <img src={mainLogo} alt="Логотип сайта" />
                    </Link>
                    <div className="header__menu">
                        <Link to="/favorite">
                            <img width={24} height={24} src={favoriteLogo} alt="Иконка избранные" />
                        </Link>
                        <div className="header__notification">
                            <div onClick={toggleNotification} >
                                <img width={24} height={24} src={notificationLogo} alt="Иконка уведомлений" />
                            </div>
                            {isVisible &&
                                <Notification
                                    setIsVisible={setIsVisible}
                                />
                            }
                        </div>
                        <div className="header__user">
                            <UserMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header