import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import EditPage from '../pages/EditPage/EditPage';
import FavoritePage from '../pages/FavoritePage/FavoritePage'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/edit/:userId" element={<EditPage />} />
            <Route path='/favorite' element={<FavoritePage />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};
export default Routers