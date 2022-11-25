import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../../context/StoreContext';
import { Loader } from '../Loader';
import './style.css'

export const Commerce = () => {

    const { getFireElements, category, loader } = useStoreContext();

    const n = useNavigate();

    useEffect(() => {
        getFireElements();
    }, [])

    if (loader) {
        return (
            <section className='commerce__section'>
                <div className='commerce__container'>
                    <div className='text__container'>
                        <p className='commerce__title'>Commerce</p>
                        <p className='commerce__info'>Find the <span> products</span> you need</p>
                    </div>
                    <Loader />
                </div>
            </section>
        )} else {
    return (
        <section className='commerce__section'>
            <div className='commerce__container'>
                <div className='text__container'>
                    <p className='commerce__title'>Commerce</p>
                    <p className='commerce__info'>Find the <span> products</span> you need</p>
                </div>
                <div className='categories__container'>
                    {
                        category.map((category, key) => {
                            return(
                                <div className='category__card'
                                    key={key}
                                    onClick={() => n(`/category/commerce/${category.name}`)}>
                                    <div className='category__image__container'>
                                        <img className='category__image' src={category.img} alt='category' />
                                    </div>
                                    <p className='category__name'>{category.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )}
}
