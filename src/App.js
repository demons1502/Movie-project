import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { TwinSpin } from 'react-cssfx-loading';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const a = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return function cleanup() {
            clearTimeout(a);
        };
    }, []);

    return (
        <>
            {loading ? (
                <div className='loading'>
                    <TwinSpin />
                </div>
            ) : (
                <BrowserRouter>
                    <Route
                        render={(props) => {
                            // console.log({ ...props });
                            return (
                                <>
                                    <Header {...props} />
                                    <Routes />
                                    <Footer />
                                </>
                            );
                        }}
                    />
                </BrowserRouter>
            )}
        </>
    );
}
export default App;
