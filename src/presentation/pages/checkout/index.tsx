import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TokenType } from '../../../data/constants'

const CheckoutPage = () => {
    const history = useHistory();
    const initialState = {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        add: '',
        country: '',
        city: '',
        zipCode: '',
        createAccount: false,
        differentAdd: false,
        paymentMethod: '',
        couponCode: ''
    };
    const [state, setstate] = useState(initialState);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const cartString = localStorage.getItem('carts') || '';
        const carts = JSON.parse(cartString);
        
        // console.log(state);
        const data = {...state, carts}
        console.log(data);
        
    }
    const handleChange = (e: any) => {
        // console.log(e);
        console.log(e.target.type);
        setstate({
            ...state,
                [e.target.name]: e.target.type == 'checkbox' ? e.target.checked : e.target.value
        })
    }
    useEffect(() => {
        const access_token = localStorage.getItem(TokenType.access_token);
        if(!access_token){
            localStorage.setItem('history_page', 'checkout.html');       
            history.push('/login.html');
        }

    }, []);

    return (
        <form onSubmit={handleSubmit}>
        <div className="container">
            <div className=" main-content-area">
                <div className="wrap-address-billing">
                    <h3 className="box-title">Billing Address</h3>
                    <div className="frm-billing">
                        <p className="row-in-form">
                            <label htmlFor="fname">first name<span>*</span></label>
                            <input id="fname" type="text"  name="fname" value={state.fname} placeholder="Your name" onChange={handleChange} />
                        </p>
                        <p className="row-in-form">
                            <label htmlFor="lname">last name<span>*</span></label>
                            <input id="lname" type="text" name="lname" value={state.lname} placeholder="Your last name" onChange={handleChange}/>
                        </p>
                        <p className="row-in-form">
                            <label htmlFor="email">Email Addreess:</label>
                            <input id="email" type="email" name="email" value={state.email} placeholder="Type your email" onChange={handleChange}/>
                        </p>
                        <p className="row-in-form">
                            <label htmlFor="phone">Phone number<span>*</span></label>
                            <input id="phone" type="number" name="phone" value={state.phone} placeholder="10 digits format" onChange={handleChange}/>
                        </p>
                        <p className="row-in-form">
                            <label htmlFor="add">Address:</label>
                            <input id="add" type="text" name="add" value={state.add} placeholder="Street at apartment number" onChange={handleChange}/>
                        </p>
                        <p className="row-in-form">
                            <label htmlFor="country">Country<span>*</span></label>
                            <input id="country" type="text" name="country" value={state.country} placeholder="United States" onChange={handleChange}/>
                        </p>
                        <p className="row-in-form">
                            <label htmlFor="zip-code">Postcode / ZIP:</label>
                            <input id="zip-code" type="number" name="zipCode" value={state.zipCode} placeholder="Your postal code" onChange={handleChange}/>
                        </p>
                        <p className="row-in-form">
                            <label htmlFor="city">Town / City<span>*</span></label>
                            <input id="city" type="text" name="city" value={state.city} placeholder="City name" onChange={handleChange}/>
                        </p>
                        <p className="row-in-form fill-wife">
                            <label className="checkbox-field">
                                <input name="createAccount" id="create-account" type="checkbox" onChange={handleChange}/>
                                <span>Create an account?</span>
                            </label>
                            <label className="checkbox-field">
                                <input name="differentAdd" id="different-add" type="checkbox" onChange={(e) => handleChange(e)}/>
                                <span>Ship to a different address?</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="summary summary-checkout">
                    <div className="summary-item payment-method">
                        <h4 className="title-box">Payment Method</h4>
                        <p className="summary-info"><span className="title">Check / Money order</span></p>
                        <p className="summary-info"><span className="title">Credit Cart (saved)</span></p>
                        <div className="choose-payment-methods">
                            <label className="payment-method">
                                <input name="payment-method" id="payment-method-bank" value="bank" type="radio" />
                                <span>Direct Bank Transder</span>
                                <span className="payment-desc">But the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</span>
                            </label>
                            <label className="payment-method">
                                <input name="payment-method" id="payment-method-visa" value="visa" type="radio" />
                                <span>visa</span>
                                <span className="payment-desc">There are many variations of passages of Lorem Ipsum available</span>
                            </label>
                            <label className="payment-method">
                                <input name="payment-method" id="payment-method-paypal" value="paypal" type="radio" />
                                <span>Paypal</span>
                                <span className="payment-desc">You can pay with your credit</span>
                                <span className="payment-desc">card if you don't have a paypal account</span>
                            </label>
                        </div>
                        <p className="summary-info grand-total"><span>Grand Total</span> <span className="grand-total-price">$100.00</span></p>
                        <button type="submit" className="btn btn-medium">Place order now</button>
                    </div>
                    <div className="summary-item shipping-method">
                        <h4 className="title-box f-title">Shipping method</h4>
                        <p className="summary-info"><span className="title">Flat Rate</span></p>
                        <p className="summary-info"><span className="title">Fixed $50.00</span></p>
                        <h4 className="title-box">Discount Codes</h4>
                        <p className="row-in-form">
                            <label htmlFor="coupon-code">Enter Your Coupon code:</label>
                            <input id="coupon-code" type="text" name="couponCode" value={state.couponCode} placeholder="Your Coupon"  onChange={handleChange}/>
                        </p>
                    </div>
                </div>

                <div className="wrap-show-advance-info-box style-1 box-in-site">
                    <h3 className="title-box">Most Viewed Products</h3>
                    <div className="wrap-products">
                        <div className="products slide-carousel owl-carousel style-nav-1 equal-container" data-items="5" data-loop="false" data-nav="true" data-dots="false" data-responsive='{"0":{"items":"1"},"480":{"items":"2"},"768":{"items":"3"},"992":{"items":"3"},"1200":{"items":"5"}}' >

                            <div className="product product-style-2 equal-elem ">
                                <div className="product-thumnail">
                                    <a href="#" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                        <figure><img src="assets/images/products/digital_04.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                    </a>
                                    <div className="group-flash">
                                        <span className="flash-item new-label">new</span>
                                    </div>
                                    <div className="wrap-btn">
                                        <a href="#" className="function-link">quick view</a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                    <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                </div>
                            </div>

                            <div className="product product-style-2 equal-elem ">
                                <div className="product-thumnail">
                                    <a href="#" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                        <figure><img src="assets/images/products/digital_17.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                    </a>
                                    <div className="group-flash">
                                        <span className="flash-item sale-label">sale</span>
                                    </div>
                                    <div className="wrap-btn">
                                        <a href="#" className="function-link">quick view</a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                    <div className="wrap-price"><ins><p className="product-price">$168.00</p></ins> <del><p className="product-price">$250.00</p></del></div>
                                </div>
                            </div>

                            <div className="product product-style-2 equal-elem ">
                                <div className="product-thumnail">
                                    <a href="#" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                        <figure><img src="assets/images/products/digital_15.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                    </a>
                                    <div className="group-flash">
                                        <span className="flash-item new-label">new</span>
                                        <span className="flash-item sale-label">sale</span>
                                    </div>
                                    <div className="wrap-btn">
                                        <a href="#" className="function-link">quick view</a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                    <div className="wrap-price"><ins><p className="product-price">$168.00</p></ins> <del><p className="product-price">$250.00</p></del></div>
                                </div>
                            </div>

                            <div className="product product-style-2 equal-elem ">
                                <div className="product-thumnail">
                                    <a href="#" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                        <figure><img src="assets/images/products/digital_01.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                    </a>
                                    <div className="group-flash">
                                        <span className="flash-item bestseller-label">Bestseller</span>
                                    </div>
                                    <div className="wrap-btn">
                                        <a href="#" className="function-link">quick view</a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                    <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                </div>
                            </div>

                            <div className="product product-style-2 equal-elem ">
                                <div className="product-thumnail">
                                    <a href="#" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                        <figure><img src="assets/images/products/digital_21.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                    </a>
                                    <div className="wrap-btn">
                                        <a href="#" className="function-link">quick view</a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                    <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                </div>
                            </div>

                            <div className="product product-style-2 equal-elem ">
                                <div className="product-thumnail">
                                    <a href="#" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                        <figure><img src="assets/images/products/digital_03.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                    </a>
                                    <div className="group-flash">
                                        <span className="flash-item sale-label">sale</span>
                                    </div>
                                    <div className="wrap-btn">
                                        <a href="#" className="function-link">quick view</a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                    <div className="wrap-price"><ins><p className="product-price">$168.00</p></ins> <del><p className="product-price">$250.00</p></del></div>
                                </div>
                            </div>

                            <div className="product product-style-2 equal-elem ">
                                <div className="product-thumnail">
                                    <a href="#" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                        <figure><img src="assets/images/products/digital_04.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                    </a>
                                    <div className="group-flash">
                                        <span className="flash-item new-label">new</span>
                                    </div>
                                    <div className="wrap-btn">
                                        <a href="#" className="function-link">quick view</a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                    <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                </div>
                            </div>

                            <div className="product product-style-2 equal-elem ">
                                <div className="product-thumnail">
                                    <a href="#" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                        <figure><img src="assets/images/products/digital_05.jpg" width="214" height="214" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                    </a>
                                    <div className="group-flash">
                                        <span className="flash-item bestseller-label">Bestseller</span>
                                    </div>
                                    <div className="wrap-btn">
                                        <a href="#" className="function-link">quick view</a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                    <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </form>
    );
}

export default CheckoutPage;