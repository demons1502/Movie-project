import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './MovieList.scss';

import { SwiperSlide, Swiper } from 'swiper/react';

import MovieCard from '../movie-card/MovieCard';

import tmdbApi, { category } from '../../api/tmdbApi';

const MovieList = (props) => {
    console.log(props.list);
    // console.log(123);
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     const getList = async () => {
    //         let lists = null;
    //         // const params = {};

    //         lists = await tmdbApi.getRandomLists();

    //         // if (props.type !== 'similar') {
    //         //     switch (props.category) {
    //         //         case category.movie:
    //         //             response = await tmdbApi.getMoviesList(props.type, {
    //         //                 params,
    //         //             });
    //         //             break;
    //         //         default:
    //         //             response = await tmdbApi.getTvList(props.type, {
    //         //                 params,
    //         //             });
    //         //             break;
    //         //     }
    //         // } else {
    //         //     response = await tmdbApi.similar(props.category, props.id);
    //         // }
    //         // setItems(response.results);
    //         console.log(lists.data);
    //         setItems(lists.data);
    //     };
    //     getList();
    // }, []);

    return (
        <div className='movie-list'>
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
                {props.list.content.map((item, index) => (
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

// MovieList.propTypes = {
//     category: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
// };

export default MovieList;
