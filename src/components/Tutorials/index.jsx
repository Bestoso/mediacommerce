import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useStoreContext } from '../../context/StoreContext'
import './style.css'
import { Loader } from '../Loader'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

export const Tutorials = () => {

    const [tutorials, setTutorials] = useState([]);
    const [loader, setLoader] = useState(true);
    const searchRef = useRef(null);
    const cardsRef = useRef(null);

    function buscador(){
        let input = searchRef.current.value; 
        input = input.toLowerCase();
        let x = document.getElementsByClassName('tutorial__card');
        for (let i = 0; i < x.length; i++) {  
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display="none";
            } else {
                x[i].style.display="flex";                 
            }
        }
    }

    const getTutorialElements = async () => {
        const db = getFirestore();
        const queryCollection = collection(db, 'tutorials');
        getDocs(queryCollection)
            .then(resp =>{
                setTutorials(resp.docs.map(doc => ({ id: doc.id, ...doc.data()})))
                setLoader(false);
            })
        }

    useEffect(() => {
        getTutorialElements();
    }, [])

    if (loader) {
        return (
            <section className='tutorials__section'>
                <Loader />
            </section>
        )
    } else {
        return (
            <section className='tutorials__section'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: .5 }}
                    className='category__selection'>
                    <div className='search__container'>
                        <p className='search__title'>Look for the last tutorials</p>
                        <input type='text' id='search' placeholder='Search...' ref={searchRef} onChange={buscador} />
                    </div>
                </motion.div>
                <div className='tutorials__container'>
                    {
                        tutorials.map((tutorial, index) => (
                            <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .5 }}
                            className='tutorial__card' ref={cardsRef} key={index} id={tutorial.id}>
                                <div className='image__container'>
                                    <img className='tutorial__image'src={tutorial.image} alt={tutorial.title} />
                                </div>
                                <div className='tutorial__info'>
                                    <h3 className='tutorial__title'>{tutorial.title}</h3>
                                    <p className='tutorial__description'>{tutorial.description}</p>
                                    <a href={tutorial.link} target='_blank' rel='noreferrer'>
                                        <button className='tutorial__button'>Read more</button>
                                    </a>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </section>
        )
    }
}
