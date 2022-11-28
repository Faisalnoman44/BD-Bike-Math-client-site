import React from 'react';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import BikeCategories from '../BikeCategories/BikeCategories';
import Reader from '../Readers/Reader';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BikeCategories></BikeCategories>
            <AdvertiseItems></AdvertiseItems>
            <Reader></Reader>
        </div>
    );
};

export default Home;