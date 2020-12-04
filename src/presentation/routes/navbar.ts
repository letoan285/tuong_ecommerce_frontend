interface IRoute {
    id: number;
    name: string;
    text: string;
    link: string;
    icon?: string;
    iconName?: string;
}


export const navRoutes: IRoute[] = [
    { id: 1, name: 'Home', text: '', link: 'index.html', icon: 'fa fa-home', iconName: "home-icon" },
    { id: 2, name: 'AboutUs', text: 'About Us', link: 'about-us.html', icon: '' },
    { id: 3, name: 'Shop', text: 'Shop', link: 'shop.html', icon: '' },
    { id: 4, name: 'Cart', text: 'Cart', link: 'cart.html', icon: '' },
    { id: 5, name: 'Checkout', text: 'Checkout', link: 'checkout.html', icon: '' },
    { id: 6, name: 'ContactUs', text: 'Contact Us', link: 'contact-us.html', icon: '' },
];