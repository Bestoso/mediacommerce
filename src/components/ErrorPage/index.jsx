import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export const ErrorPage = () => {

    const navigate = useNavigate();

    const goBackHome = () => {
        navigate('/');
    }

    return (
        <section className='error__page'>
            <div className='error__container'>
                <h1 className='error__page__title'>Error 404</h1>
                <p className='error__page__message'>Page not found</p>
                <button
                    className='error__page__button'
                    onClick={goBackHome}>Go back home</button>
            </div>
        </section>
    )
}
