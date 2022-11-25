import React from 'react'
import './style.css'
import { motion } from 'framer-motion'

export const News = () => {

    const news = [
        {
            id: 1,
            title: 'Learn Vue with Parcel',
            description: 'VueJS is a progressive framework for building user interfaces. It is designed from the ground up to be incrementally adoptable.',
            link: 'https://www.google.com/',
        },
        {
            id: 2,
            title: 'Learn React and UI Libraries',
            description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.',
            link: 'https://www.google.com/',
        },
        {
            id: 3,
            title: 'Learn JavaScript from Scratch',
            description: 'JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.',
            link: 'https://www.google.com/',
        },
        {
            id: 4,
            title: 'Learn Data and Algorithms',
            description: 'Data structures and algorithms are the foundation of computer science. They are the building blocks that allow us to write efficient programs.',
            link: 'https://www.google.com/',
        },
    ]

    return (
        <motion.section className='news__section' id='news'>
            <motion.div className='news__container'>
                {
                    news.map((item) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .3 }}
                                className='news__card' key={item.id}>
                                <h1 className='news__card__title'>{item.title}</h1>
                                <p className='news__card__description'>{item.description}</p>
                                <button className='news__card__button'>Read more</button>
                            </motion.div>
                        )
                    })
                }
            </motion.div>

        </motion.section>
    )
}
