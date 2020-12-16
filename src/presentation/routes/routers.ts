import React from 'react';

export interface IRouter {
    name?: string;
    path: string;
    component: any;
    exact?: boolean
}


const HomePage = React.lazy(() => import('../pages/home/HomePage'));
const ProductListPage = React.lazy(() => import('../pages/products/ProductList'));
const ProductDetailPage = React.lazy(() => import('../pages/products/ProductDetail'));
const ShopPage = React.lazy(() => import('../pages/shop'));
const AboutUsPage = React.lazy(() => import('../pages/about'));
const CartPage = React.lazy(() => import('../pages/cart'));
const CheckoutPage = React.lazy(() => import('../pages/checkout'));
const ContactPage = React.lazy(() => import('../pages/contact'));
const Login = React.lazy(() => import('../pages/users/login'));
const Register = React.lazy(() => import('../pages/users/register'));

export const routers = [
    {name: 'HomePage', path: '/', component: HomePage, exact: true},
    {name: 'HomePage', path: '/index.html', component: HomePage, exact: true},
    {name: 'ProductListPage', path: '/products', component: ProductListPage, exact: true},
    {name: 'ProductDetailPage', path: '/products/:id', component: ProductDetailPage, exact: true},
    {name: 'AboutUsPage', path: '/about-us.html', component: AboutUsPage, exact: true},
    {name: 'ShopPage', path: '/shop.html', component: ShopPage, exact: true},
    {name: 'CartPage', path: '/cart.html', component: CartPage, exact: true},
    {name: 'CheckoutPage', path: '/checkout.html', component: CheckoutPage, exact: true},
    {name: 'ContactPage', path: '/contact-us.html', component: ContactPage, exact: true},
    {name: 'Login', path: '/login.html', component: Login, exact: true},
    {name: 'Register', path: '/register.html', component: Register, exact: true},
];