import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import './style.css'

const MenuElements = () => {

    const [menuState, setMenuState] = useState('menu__toggler');
    const [navState, setNavState] = useState('navigable__links');


    const toggleMenu = () => {
        if(menuState === 'menu__toggler' && navState === 'navigable__links'){
            setMenuState('menu__toggler active');
            setNavState('navigable__links active');
        } else {
            setMenuState('menu__toggler');
            setNavState('navigable__links');
        }
    }

    return (
        <>
        <div
            className={menuState}
            onClick={toggleMenu}>
            <div className="toggler"></div>
            <div className="toggler"></div>
        </div>
        <nav className={navState}>
            <ul className="links">
                <li className="link">
                    <Link
                        to="/"
                        onClick={toggleMenu}>Home
                    </Link>
                </li>
                <li className="link">
                    <Link
                        to="/category/tutorials"
                        onClick={toggleMenu}>Tutorials
                    </Link>
                </li>
                <li className="link">
                    <a
                        href="https://bestoso.github.io/portfolio-commerce/inicio"
                        target="_blank"
                        rel="noreferrer"
                        onClick={toggleMenu}>Portfolio
                    </a>
                </li>
                <li className="link">
                    <Link
                        to="/category/commerce"
                        onClick={toggleMenu}>Commerce
                    </Link>
                </li>
                <li className="link">
                    <Link
                        to="/category/contact"
                        onClick={toggleMenu}>Contact
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

const LogoType = () => {

    const { quantity } = useCartContext();

    return (
        <div className="logo__container">
            <p className="logo">bestoso <span className='highlighted'>media</span></p>
            <Link className="logo__info" to='/cart'>
                <i className='bx bx-cart bx-flip-horizontal' />
                { quantity > 0 && <span className='cart__quantity'>{quantity}</span> }
            </Link>
        </div>
    )
}

export const NavBar = () => {

    const [headerState, setHeaderState] = useState('header');

    const toggleHeader = () => {
        window.scrollY > 10 ? setHeaderState('header active') : setHeaderState('header');
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleHeader);
    }, []);

    return (
        <header className={headerState}>
            <MenuElements />
            <LogoType />
        </header>
    )
}
