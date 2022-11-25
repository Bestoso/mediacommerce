import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { Loader } from '../Loader';
import './style.css'
import Swal from 'sweetalert2';

export const ItemDetail = () => {

    const [item, setItem] = useState([]);
    const { itemId }  = useParams();
    const n = useNavigate();
    const { addItem } = useCartContext();
    const [loader, setLoader] = useState(true);

    const handleAddItem = () => {
        addItem(item, 1);
        Swal.fire({
            icon: 'success',
            title: 'Item added to cart',
            showConfirmButton: false,
            timer: 1500
        })
    }

    
    const getOneProduct = async () => {
        const db = getFirestore();
        const q = collection(db, 'categories');
        getDocs(q)
            .then(resp => {
                resp.docs.forEach(doc => {
                    const data = doc.data();
                    const filtered = data.items.find((item) => item.id === itemId);
                    if(filtered) {
                        setItem(filtered);
                        setLoader(false);
                    }
                })
            })                
    }
    

    useEffect(() => {
        getOneProduct();
    }, []);

    if(loader) {
        return (
            <section className='detail__container'>
                <Loader />
            </section>  
        )
    } else {
        return (
            <section className='detail__container'>
                <div className='go__back'>
                    <p className='text'>Detail</p>
                    <p className='back' onClick={() => n(item.bRoute)}>Go Back</p>
                </div>
                <div className='detail__card'>
                    <div className='image__container'>
                        <img className='detail__img' src={item.img} alt='item' />
                    </div>
                    <div className='detail__info'>
                        <p className='detail__name'>{item.name}</p>
                        <p className='detail__price'>${item.price}</p>
                        <p className='detail__description'>{item.description}</p>
                        <button
                        className='detail__button'
                        id={item.id}
                        onClick={handleAddItem}>Add to Cart</button>
                    </div>
                </div>
            </section>
        )
    }
}
