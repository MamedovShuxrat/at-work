
import React from 'react';
import './favoritePage.scss';
import BackButton from '../../components/BackButton/BackButton';

const FavoritePage = () => {
    return (
        <div className='favorite'>
            <div className="container">
                <div className="favorite__inner">
                    <div className="favorite__wrapper">
                        <BackButton />
                    </div>
                    <h1 className="favorite__title">Страница в разработке</h1>
                    <p className="favorite__message">
                        Мы работаем над этой страницей, чтобы сделать её лучше для вас.
                        Пожалуйста, загляните позже!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FavoritePage;