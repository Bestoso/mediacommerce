import React from 'react'
import './style.css'
import Swal from "sweetalert2"

export const Contact = () => {

    const formValidation = e => {
        e.preventDefault()
        const form = e.target
        const values = {
            name: form.name.value,
            email: form.email.value,
        }
        const regExp = {
            name: /^[a-zA-Z ]{3,30}$/,
            email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        }
        if (values.name === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your name',
            })
        } else if (!regExp.name.test(values.name)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The name must be between 3 and 30 characters long',
            })
        } else if (values.email === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your email',
            })
        } else if (!regExp.email.test(values.email)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a valid email!',
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Your message has been sent!',
                showConfirmButton: false,
                timer: 1500
            })
            form.reset()
        }
    }

    return (
        <section className='contact__page'>
            <div className='contact__container'>
                <h1 className='contact__title'>Contact</h1>
                <p className='contact__message'>You got any questions? Do not hesitate to contact me!</p>
            </div>
            <div className='contact__form__container'>
                <form className='contact__form' onSubmit={formValidation}>
                    <div className='contact__form__group'>
                        <label className='contact__form__label'>Name</label>
                        <input className='contact__form__input' type='text' name='name'/>
                        <label className='contact__form__label'>Email</label>
                        <input className='contact__form__input' type='email' name='email'/>
                        <label className='contact__form__label'>Message</label>
                        <textarea className='contact__form__input' name='message' id='message' cols='30' rows='10'></textarea>
                        <button className='contact__form__button'>Send</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
