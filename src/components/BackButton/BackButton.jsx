import React from 'react';
import { useNavigate } from 'react-router-dom';
import './backButton.scss';

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <button className="back" onClick={handleBack}>
            <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <clipPath id="clip54_588">
                        <rect id="arrow-left" rx="0.000000" width="17.000000" height="17.000000" transform="translate(0.500000 3.500000)" fill="white" fill-opacity="0" />
                    </clipPath>
                    <clipPath id="clip54_591">
                        <rect id="Solid/Interface/Backarrow" rx="2.500000" width="23.000000" height="23.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0" />
                    </clipPath>
                </defs>
                <g clip-path="url(#clip54_591)">
                    <g clip-path="url(#clip54_588)">
                        <path id="Vector" d="M11.25 12L0.75 12" stroke="#161616" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round" />
                        <path id="Vector" d="M6 17.25L0.75 12L6 6.75" stroke="#161616" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round" />
                    </g>
                </g>
            </svg>
            <span className='back__text'>Назад</span>
        </button>
    );
};

export default BackButton;