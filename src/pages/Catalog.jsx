import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import PageHeader from '../components/page-header/PageHeader';

import tmdbApi, { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';

const Catalog = () => {
    const { category } = useParams();
    const [items, setItems] = useState([]);

    console.log(category);

    useEffect(() => {
        let res = [];
        const getList = async () => {
            switch (category) {
                case 'movie':
                    res = await tmdbApi.getRandomLists('movie', 'crime');
                    break;

                default:
                    res = await tmdbApi.getRandomLists('series', 'crime');
                    break;
            }

            // let response = null;

            // if (keyword === undefined) {
            //     const params = {};
            //     switch (props.category) {
            //         case category.movie:
            //             response = await tmdbApi.getMoviesList(
            //                 movieType.upcoming,
            //                 { params }
            //             );
            //             break;
            //         default:
            //             response = await tmdbApi.getTvList(tvType.popular, {
            //                 params,
            //             });
            //     }
            // } else {
            //     const params = {
            //         query: keyword,
            //     };
            //     response = await tmdbApi.search(props.category, { params });
            // }
            // console.log(response.results);
            // setItems(response.results);
            // setTotalPage(response.total_pages);
            console.log(res.data[0]);
            setItems(res.data[0].content);
        };
        getList();
    }, [category]);

    return (
        <>
            <PageHeader>
                {category === cate.movie ? 'Movies' : 'TV Series'}
            </PageHeader>
            <div className='container'>
                <div className='section mb-3'>
                    <MovieGrid category={category} list={items} />
                </div>
            </div>
        </>
    );
};

export default Catalog;
