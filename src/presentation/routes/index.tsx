import React from 'react';
import { Route } from 'react-router-dom';
import AboutUsPage from '../pages/about';
import CartPage from '../pages/cart';
import CheckoutPage from '../pages/checkout';
import ContactPage from '../pages/contact';
import HomePage from '../pages/home/HomePage';
import ProductDetailPage from '../pages/products/ProductDetail';
import ProductListPage from '../pages/products/ProductList';
import ShopPage from '../pages/shop';
const Routes = () => {
    return (
        <>
            <Route path="/" exact render={() => <HomePage />}/>
            <Route path="/index.html" exact render={() => <HomePage />}/>
            <Route path="/products" exact render={() => <ProductListPage />}/>
            <Route path="/products/:id" exact render={() => <ProductDetailPage />}/>
            <Route path="/about-us.html" exact render={() => <AboutUsPage />}/>
            <Route path="/shop.html" exact render={() => <ShopPage />}/>
            <Route path="/cart.html" exact render={() => <CartPage />}/>
            <Route path="/checkout.html" exact render={() => <CheckoutPage />}/>
            <Route path="/contact-us.html" exact render={() => <ContactPage />}/>
        </>
    );
}

export default Routes;