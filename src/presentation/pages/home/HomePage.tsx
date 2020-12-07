import React from 'react';
import LatestProducts from '../../modules/latest_products';
import OnSale from '../../modules/onsale';
import ProductCategories from '../../modules/product_categories';

const HomePage = () => {
    return (
        <>
            <OnSale />
            <LatestProducts />
            <ProductCategories />
        </>
    );
}

export default HomePage;