import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OutlineButton } from '../components/button/Button';

import axios from 'axios';

import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';

// import { category, movieType, tvType } from '../api/tmdbApi';
import tmdbApi from '../api/tmdbApi';

const Home = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        console.log('Get Api');
        const getRandomLists = async () => {
            const res = await tmdbApi.getRandomLists('movie', 'crime');
            console.log(res.data);
            setLists(res.data);
        };
        getRandomLists();
    }, []);
    return (
        <>
            <HeroSlide />
            <div className='container'>
                {lists.map((list, index) => (
                    <div key={index} className='section mb-3'>
                        <div className='section__header mb-2'>
                            <h2>{list.title}</h2>
                            <Link to='/movie'>
                                <OutlineButton className='small'>
                                    View more
                                </OutlineButton>
                            </Link>
                        </div>
                        <MovieList list={list} category={list.type}></MovieList>
                    </div>
                ))}
                {/* <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Trending Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className='small'>
                                View more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList
                        category={category.movie}
                        type={movieType.popular}
                    ></MovieList>
                </div>
                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Top Rated Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className='small'>
                                View more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList
                        category={category.movie}
                        type={movieType.top_rated}
                    ></MovieList>
                </div>
                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Trending TV</h2>
                        <Link to='/tv'>
                            <OutlineButton className='small'>
                                View more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular} />
                </div>
                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Top Rated TV</h2>
                        <Link to='/tv'>
                            <OutlineButton className='small'>
                                View more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated} />
                </div> */}
            </div>
        </>
    );
};

export default Home;
