import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Footer from './../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;