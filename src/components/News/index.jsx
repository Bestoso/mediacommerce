import React, { useEffect, useState } from 'react'
import './style.css'
import { motion } from 'framer-motion'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Loader } from '../Loader';
import Swal from "sweetalert2"

export const News = () => {

    const [news, setNews] = useState([]);
    const [loader, setLoader] = useState(true);

    const getNews = async () => {
        const db = getFirestore();
        const queryCollection = collection(db, 'news');
        getDocs(queryCollection)
        .then(resp => {
            setNews(resp.docs.map(doc => ({ id: doc.id, ...doc.data()})))
            setLoader(false);
        })
    }

    useEffect(() => {
        getNews();
    }, [])

    if (loader) {
        return (
            <section className='news__section'>
                <Loader />
            </section>
        )
    } else {
    return (
        <motion.section className='news__section' id='news'>
            <motion.div className='news__container'>
                {
                    news.map((item) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 30}}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .3 }}
                                drag={true}
                                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                dragElastic={0.5}
                                dragTransition={{ bounceStiffness: 600, bounceDamping: 25 }}
                                className='news__card' key={item.id}>
                                <h1 className='news__card__title'>{item.title}</h1>
                                <p className='news__card__description'>{item.description}</p>
                                <button className='news__card__button' onClick={() => {
                                    Swal.fire({
                                        title: item.title,
                                        text: item.description + ' If you want to know more, contact me!',
                                    })
                                }}>Read more</button>
                            </motion.div>
                        )
                    })
                }
            </motion.div>
        </motion.section>
    )}
}
