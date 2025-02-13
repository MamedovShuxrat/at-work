import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editUser } from '../../store/slices/usersSlice'
import userImg from '../../assets/images/avatar1.png'
import Popup from '../../components/Popup/Popup'
import BackButton from '../../components/BackButton/BackButton'
import './editPage.scss'
import LazyLoaderEdit from '../../components/LazyLoaders/LazyLoaderEdit'
const EditPage = () => {
    const { userId } = useParams()
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.list)
    const user = users.find((u) => u.id === parseInt(userId));

    const { status } = useSelector((state) => state.users)
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        city: '',
        phone: '',
        companyName: '',
    })

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                username: user.username,
                email: user.email,
                city: user.address.city,
                phone: user.phone,
                companyName: user.company.name,
            })
        }
    }, [user])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.values(formData).every((val) => val.trim() !== '')) {
            dispatch(editUser({ id: user.id, ...formData }))
            setIsPopupOpen(true)
            setTimeout(() => {
                setIsPopupOpen(false)
            }, 4000)
        } else {
            alert('Пожалуйста заполните все поля')
        }
    }

    const closePopup = () => {
        setIsPopupOpen(false)
    }
    return (
        <div className='edit-page'>
            <div className="container">
                <div className="edit-page__inner">
                    <div className="edit-page__back">
                        <BackButton />
                    </div>
                </div>
                {status === 'loading' ? <LazyLoaderEdit /> : (
                    <div className="edit-page__wrapper">
                        <div className="edit-page__card">
                            <div className="edit-page__visual">
                                <img src={userImg} alt="Картинка пользователя" className="edit-page__img" />
                            </div>
                            <div className="edit-page__content">
                                <p className="edit-page__profile edit-page__profile-title">Данные профиля</p>
                                <p className="edit-page__profile">Рабочее пространство</p>
                                <p className="edit-page__profile">Приватность</p>
                                <p className="edit-page__profile">Безопасность</p>
                            </div>
                        </div>
                        <div className="edit-page__form">
                            <form className='form' onSubmit={handleSubmit}>
                                <h3 className="form__title">Данные профиля</h3>
                                <div className="form__field">
                                    <label className='form__desc' htmlFor="name">Имя</label>
                                    <input className='form__input' name="name" value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="form__field">
                                    <label className='form__desc' htmlFor="username">Никнейм</label>
                                    <input className='form__input' name="username" value={formData.username} onChange={handleChange} />
                                </div>
                                <div className="form__field">
                                    <label className='form__desc' htmlFor="email">Почта</label>
                                    <input className='form__input' name="email" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="form__field">
                                    <label className='form__desc' htmlFor="city">Город</label>
                                    <input className='form__input' name="city" value={formData.city} onChange={handleChange} />
                                </div>
                                <div className="form__field">
                                    <label className='form__desc' htmlFor="phone">Телефон</label>
                                    <input className='form__input' name="phone" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="form__field">
                                    <label className='form__desc' htmlFor="companyName">Название компании</label>
                                    <input className='form__input' name="companyName" value={formData.companyName} onChange={handleChange} />
                                </div>
                                <button className='form__btn' type="submit">Сохранить</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            {isPopupOpen && <Popup message="Данные успешно сохранены!" onClose={closePopup} />}
        </div>

    )
}

export default EditPage