import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react'
import { useCartContext } from '../../context/CartContext';
import './style.css'

export const Cart = () => {

    const { cart, setCart, clear, setQuantity } = useCartContext();

    const createOrder = async e => {
        const order = {
            buyer: {
                name: e.target.name.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
            },
            items: cart.map(item => {
                return {
                    id: item.item.id,
                    title: item.item.name,
                    price: item.item.price,
                    quantity: item.quantity
                }
            }),
            date: new Date(),
            total: cart.reduce((acc, item) => acc + item.item.price * item.quantity, 0)
        }
        const db = getFirestore();
        const orders = collection(db, 'orders');
        const addNewOrder = await addDoc(orders, order);
    }

    //create a function to delete a certain item from the cart

    const removeItem = (item) => {
        cart.splice(item, 1);
        setCart([...cart]);
        setQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
    }


    const formValidation = e => {
        e.preventDefault()
        const target = e.target
        const values = {
            name: target.name.value,
            email: target.email.value,
            repEmail: target.repEmail.value,
            phone: target.phone.value,
        }
        const regExp = {
            name: /^[a-zA-Z ]{3,30}$/,
            email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            repEmail: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            phone: /^\d{10}$/,
        }
        if (values.name === '') {
            alert('Please enter your name')
        } else if (!regExp.name.test(values.name)) {
            alert('The name must be between 3 and 30 characters long')
        } else if (values.email === '') {
            alert('Please enter your email')
        } else if (!regExp.email.test(values.email)) {
            alert('Please enter a valid email')
        } else if (values.repEmail === '') {
            alert('Please repeat your email')
        } else if (values.repEmail !== values.email) {
            alert('Please enter the same email')
        } else if (values.phone === '') {
            alert('Please enter your phone')
        } else if (!regExp.phone.test(values.phone)) {
            alert('Your phone must be 10 digits long')
        } else {
            alert('Your order has been sent')
            createOrder(e);
            clear()
            setTimeout(() => {
                // window.location.reload()
            }, 1500)
        }
    }

    return (
        <div className='cart__section'>
            <div className='cart__container'>
                <table className='cart__table'>
                    <thead className='cart__table__header'>
                        <tr>
                            <th className='cart__table__title'>Product</th>
                            <th className='cart__table__title'>Price</th>
                            <th className='cart__table__title'>Quantity</th>
                        </tr>
                    </thead>
                    <tbody className='cart__table__body'>
                    {
                        cart.map((item, index) => {
                            return (
                                    <tr key={index}>
                                        <td className='cart__table__item'>{item.item.name}</td>
                                        <td className='cart__table__item'>${item.item.price}</td>
                                        <td className='cart__table__item'>
                                            <p>{item.quantity}</p>
                                            <button className='delete__button' id={item.item.id} onClick={
                                                e => {
                                                    removeItem(item.item.id)
                                                }
                                            }><i className='bx bx-trash-alt'></i></button>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                                <tr className='cart__table__total'>
                                    <td className='cart__table__item'>Total</td>
                                    <td className='cart__table__item'>${cart.reduce((acc, item) => acc + item.item.price * item.quantity, 0)}</td>
                                    <td className='cart__table__item'></td>
                                </tr>
                            </tbody>
                </table>
            </div>
            <form className='form__container' onSubmit={formValidation}>
                <div className='form'>
                    <div className='form__group'>
                        <label className='form__label'>Name</label>
                        <input className='form__input' type='text' name='name'/>
                        <label className='form__label'>Email</label>
                        <input className='form__input' type='email' name='email'/>
                        <label className='form__label'>Repeat Email</label>
                        <input className='form__input' type='email' name='repEmail'/>
                        <label className='form__label'>Phone</label>
                        <input className='form__input' type='tel' name='phone'/>
                    </div>
                    <button className='form__button'>Buy</button>
                </div>
            </form>
            <button
            onClick={clear} className='cancel__button'>Cancel</button>
        </div>
    )
}
