import { collection, getFirestore, query, where, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useStoreContext } from '../../context/StoreContext';
import { Loader } from '../Loader';
import './style.css'

export const ItemCategory = () => {

    const [ itemCategory, setItemCategory ] = useState([]);
    const [ loader, setLoader ] = useState(true);
    
    const { id } = useParams();
    const n = useNavigate();
    const getOneProduct = async () => {
        const db = getFirestore();
        const q = query(collection(db, 'categories'),
        where('name', '==', id))
        
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setItemCategory(doc.data());
        });
        setLoader(false);
    }
    
    useEffect(() => {
        getOneProduct();
    }, []);

    if(loader) {
        return (
            <section className='category__page'>
                <div className='category__title'>
                    <Link to='/category/commerce'>Go Back</Link>
                </div>
                <Loader />
            </section>
        )
    } else {
    return (
        <section className='category__page'>
            <div className='category__title'>
                <p>{itemCategory.name}</p>
                <Link to='/category/commerce'>Go Back</Link>
            </div>
            <div className='category__container'>
            {
                itemCategory.items && itemCategory.items.map((item, key) => {
                    return(
                        <div className='category__item'
                            key={key}
                            onClick={() => n('/item/' + item.id)}>
                            <div className='image__container'>
                                <img className='category__img' src={item.img} alt='item' />
                            </div>
                            <p className='category__name'>{item.name}</p>
                            <p className='category__price'>${item.price}</p>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )}
}
