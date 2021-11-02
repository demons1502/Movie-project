import React, { useRef, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './header.scss';
import logo from '../../assets/tmovie.png';

const headerNav = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Movies',
        path: '/movie',
    },
    {
        display: 'TV Series',
        path: '/series',
    },
];

const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(
        (headerItem) => headerItem.path === pathname
    );

    useEffect(() => {
        const shrinkHeader = () => {
            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        };
        document.addEventListener('scroll', shrinkHeader);
        return () => {
            document.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className='header'>
            <div className='header__wrap container'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                    <Link to='/'>VKUMovie</Link>
                </div>
                <ul className='header__nav'>
                    {headerNav.map((headerItem, index) => (
                        <li
                            key={index}
                            className={`${index === active ? 'active' : ''}`}
                        >
                            <Link to={headerItem.path}>
                                {headerItem.display}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
