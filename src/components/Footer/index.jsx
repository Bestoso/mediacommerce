import React from 'react'
import './style.css'
import { motion } from 'framer-motion'

const SubscribeSection = () => {

    const getEmail = e => {
        e.preventDefault()
        console.log(e.target.email.value)
    }

    return (
        <div className='subscribe__section'>
            <div className='text__section'>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .3 }}
                    className='subscribe__title'>Suscribe to my Newsletter for free tutorials and courses every month
                </motion.h2>
                <p
                    className='subscribe__description'>
                    Dont miss your chance to keep learning!
                </p>
                </div>
                <form className='input__section'
                onSubmit={ getEmail }>
                    <input className='subscribe__input' name='email' type='email' required placeholder='Enter your email' />
                    <button className='subscribe__button'>Subscribe</button>
                </form>
        </div>
    )
}

export const Footer = () => {
    return (
        <footer className='footer__section'>
            <SubscribeSection />
            <div className='container'>
                <div className='social__links'>
                    <ul className='social__links__list'>
                        <li className='social__links__item'>
                            <a href='https://www.facebook.com/bestoso.media' target='_blank' rel='noreferrer'>
                            <i className='bx bxl-facebook'></i>
                            </a>
                        </li>
                        <li className='social__links__item'>
                            <a href='https://www.instagram.com/s.bestoso/' target='_blank' rel='noreferrer'>
                            <i className='bx bxl-instagram'></i>
                            </a>
                        </li>
                        <li className='social__links__item'>
                            <a href='https://github.com/Bestoso' target='_blank' rel='noreferrer'>
                            <i className='bx bxl-github'></i>
                            </a>
                        </li>
                        <li className='social__links__item'>
                            <a href='https://www.linkedin.com/in/santiago-sebastian-bestoso-6b5525242/' target='_blank' rel='noreferrer'>
                                <i className='bx bxl-linkedin'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
