import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router';

import './MovieGrid.scss';

import MovieCard from '../movie-card/MovieCard';

import Input from '../input/Input';
import Button, { OutlineButton } from '../button/Button';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';

const MovieGrid = (props) => {
    const [items, setItems] = useState([]);

    const [visible, setVisible] = useState(10);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    // const { category } = useParams();

    // useEffect(() => {
    //     const getList = async () => {
    //         const res = await tmdbApi.getRandomLists('movie', 'crime');
    //         console.log(res.data[0]);
    //         setItems(res.data[0]);
    //     };
    //     getList();
    // }, []);

    // const loadMore = async () => {
    //     let response = null;

    //     if (keyword === undefined) {
    //         const params = {
    //             page: page + 1,
    //         };
    //         switch (props.category) {
    //             case category.movie:
    //                 response = await tmdbApi.getMoviesList(movieType.upcoming, {
    //                     params,
    //                 });
    //                 break;
    //             default:
    //                 response = await tmdbApi.getTvList(tvType.popular, {
    //                     params,
    //                 });
    //         }
    //     } else {
    //         const params = {
    //             page: page + 1,
    //             query: keyword,
    //         };
    //         response = await tmdbApi.search(props.category, { params });
    //     }
    //     console.log(response.results);
    //     setItems([...items, ...response.results]);
    //     setPage(page + 1);
    // };
    const showMore = () => {
        setVisible((preValue) => preValue + 5);
    };

    const { list, category } = props;

    return (
        <>
            {/* <div className='section mb-3'>
                <MovieSearch category={props.category} keyword={keyword} />
            </div> */}
            <div className='movie-grid'>
                {list.slice(0, visible).map((item, index) => (
                    <MovieCard category={category} item={item} key={index} />
                ))}
            </div>
            <OutlineButton className='small' onClick={showMore}>
                Load more
            </OutlineButton>
            {page < totalPage ? (
                <div className='movie-grid__loadmore'>
                    <OutlineButton className='small' /*onClick={loadMore}*/>
                        Load more
                    </OutlineButton>
                </div>
            ) : null}
        </>
    );
};

const MovieSearch = (props) => {
    const history = useHistory();

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    const gotoSearch = useCallback(() => {
        if (keyword.trim().length > 0) {
            history.push(`${category[props.category]}/search/${keyword}`);
        }
    }, [keyword, props.category, history]);

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                gotoSearch();
            }
        };
        document.addEventListener('keyup', enterEvent);

        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, gotoSearch]);

    return (
        <div className='movie-search'>
            <Input
                type='text'
                placeholder='Enter keyword'
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className='small' onClick={gotoSearch}>
                Search
            </Button>
        </div>
    );
};

export default MovieGrid;
