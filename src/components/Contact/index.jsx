import React from 'react'
import './style.css'

export const Contact = () => {
    return (
        <section className='contact__page'>
            <div className='contact__container'>
                <h1 className='contact__title'>Contact</h1>
                <p className='contact__message'>You got any questions? Do not hesitate to contact me!</p>
            </div>
            <div className='contact__form__container'>
                <form className='contact__form'>
                    <div className='contact__form__group'>
                        <label className='contact__form__label'>Name</label>
                        <input className='contact__form__input' type='text' />
                        <label className='contact__form__label'>Email</label>
                        <input className='contact__form__input' type='email' />
                        <label className='contact__form__label'>Message</label>
                        <textarea className='contact__form__input' name='message' id='message' cols='30' rows='10'></textarea>
                        <button className='contact__form__button'>Send</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
