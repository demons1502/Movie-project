import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './MovieList.scss';

import { SwiperSlide, Swiper } from 'swiper/react';

import MovieCard from '../movie-card/MovieCard';

import tmdbApi, { category } from '../../api/tmdbApi';

const MovieList = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {
                            params,
                        });
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {
                            params,
                        });
                        break;
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results);
        };
        getList();
    }, [props.type, props.id, props.category]);

    return (
        <div className='movie-list'>
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <MovieCard
                            item={item}
                            category={props.category}
                        ></MovieCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default MovieList;
