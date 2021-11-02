import React, { useEffect, useState } from 'react';

import './MovieCard.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
const MovieCard = (props) => {
    const [movie, setMovie] = useState({});
    const item = props.item;

    const link = '/' + category[props.category] + '/' + item;

    useEffect(() => {
        const getMovie = async () => {
            const res = await tmdbApi.getMovie(item);
            console.log(res.data);
            setMovie(res.data);
        };
        getMovie();
    }, [item]);

    return (
        <Link to={link}>
            <div
                className='movie-card'
                style={{ backgroundImage: `url(${movie.img})` }}
            >
                <Button>
                    <i className='bx bx-play'></i>
                </Button>
            </div>
            <h3>{movie.title}</h3>
        </Link>
    );
};

export default MovieCard;
