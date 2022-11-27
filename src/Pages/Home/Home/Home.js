import React from 'react';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/bikeCategories';
import Reader from '../Readers/Reader';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <AdvertiseItems></AdvertiseItems>
            <Reader></Reader>
        </div>
    );
};

export default Home;