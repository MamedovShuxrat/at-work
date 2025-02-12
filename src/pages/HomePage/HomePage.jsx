import React, { useEffect } from 'react'
import './homePage.scss'
import Card from '../../components/Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/slices/usersSlice'
import LazyLoader from '../../components/LazyLoaders/LazyLoader'

const HomePage = () => {
    const dispatch = useDispatch()
    const { list: activeUsers, archive: archiveUser, status } = useSelector((state) => state.users)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <div className='home'>
            <div className="container">
                <div className="home__inner">
                    <section className="home__active">
                        <h1 className="home__title">
                            Активные
                        </h1>
                        <div className="home__line"></div>
                        <div className="cards">
                            {status === 'loading' ? (
                                [...Array(6)].map((_, key) => (
                                    <LazyLoader key={key} />
                                ))
                            ) : (
                                activeUsers.map((user) => (
                                    <Card key={user.id} user={user} />
                                ))
                            )}
                        </div>
                    </section>
                    <section className='home__archive'>
                        <h2 className="home__title home__title-archive">Архив</h2>
                        <div className="home__line"></div>
                        <div className="cards archive">{
                            archiveUser.map((user) => (
                                <Card key={user.id} user={user} isArchived={true} />
                            ))
                        }
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default HomePage