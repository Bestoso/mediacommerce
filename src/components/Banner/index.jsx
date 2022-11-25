import React from 'react'
import './style.css'
import bestoso from '../../assets/images/bestoso.png'
import one from '../../assets/images/1.jpeg'
import { motion } from 'framer-motion'

export const Banner = () => {

    return (
        <section className='banner'>
            <motion.div
                initial={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0 }}
                whileInView={{ clipPath: 'circle(100% at 50% 50%)', opacity: 1 }}
                transition={{ duration: .6 }}
                className='pic__container'>
                <img src={one} alt='main-image'/>
            </motion.div>
            <div className='main__container'>
                <div className='mainimage__container'>
                    <img src={ bestoso } alt='mainimage' />
                </div>
                <div className='text__container'>
                        <p className='text'>
                            <span>All your media</span>
                            <span>in one place</span>
                        </p>
                        <p className='info'> Creating, Developing and Learning </p>
                        <a href='#news'>
                            <button className='more__button'>Learn more</button>
                        </a>
                    </div>
            </div>
        </section>
    )
}
