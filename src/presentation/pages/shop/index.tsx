import React from 'react';
import AllCategories from '../../components/all_categories';
import Breadcrumbs from '../../components/breadcrumbs';

const ShopPage = () => {
    return (

        <div className="container">
            <Breadcrumbs />
            <div className="row">
                <div className="col-3">
                    <div className="all-categories">
                        <AllCategories />
                    </div>
                    <div className="all-categories">
                        <AllCategories />
                    </div>

                </div>
                <div className="col-9">
                    <div>
                        <div className="latest-product__banner">
                            <img src={'assets/images/digital-electronic-banner.jpg'} />
                        </div>
                    </div>
                    <div>
                        <div className="wrap-shop-control">

                            <h1 className="shop-title">Digital & Electronics</h1>

                            <div className="wrap-right">

                                <div className="sort-item orderby ">
                                    <select name="orderby" className="use-chosen" >
                                        <option value="menu_order" selected={true}>Default sorting</option>
                                        <option value="popularity">Sort by popularity</option>
                                        <option value="rating">Sort by average rating</option>
                                        <option value="date">Sort by newness</option>
                                        <option value="price">Sort by price: low to high</option>
                                        <option value="price-desc">Sort by price: high to low</option>
                                    </select>
                                </div>

                                <div className="sort-item product-per-page">
                                    <select name="post-per-page" className="use-chosen" >
                                        <option value="12" selected={true}>12 per page</option>
                                        <option value="16">16 per page</option>
                                        <option value="18">18 per page</option>
                                        <option value="21">21 per page</option>
                                        <option value="24">24 per page</option>
                                        <option value="30">30 per page</option>
                                        <option value="32">32 per page</option>
                                    </select>
                                </div>

                                <div className="change-display-mode">
                                    <a href="#" className="grid-mode display-mode active"><i className="fa fa-th"></i>Grid</a>
                                    <a href="list.html" className="list-mode display-mode"><i className="fa fa-th-list"></i>List</a>
                                </div>

                            </div>

                        </div>

                        <div className="row">

                            <ul className="product-list grid-products equal-container">

                                <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
                                    <div className="product product-style-3 equal-elem ">
                                        <div className="product-thumnail">
                                            <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                <figure><img src="assets/images/products/digital_20.jpg" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                            <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            <a href="#" className="btn add-to-cart">Add To Cart</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
                                    <div className="product product-style-3 equal-elem ">
                                        <div className="product-thumnail">
                                            <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                <figure><img src="assets/images/products/digital_22.jpg" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                            <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            <a href="#" className="btn add-to-cart">Add To Cart</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
                                    <div className="product product-style-3 equal-elem ">
                                        <div className="product-thumnail">
                                            <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                <figure><img src="assets/images/products/digital_10.jpg" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                            <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            <a href="#" className="btn add-to-cart">Add To Cart</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
                                    <div className="product product-style-3 equal-elem ">
                                        <div className="product-thumnail">
                                            <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                <figure><img src="assets/images/products/digital_01.jpg" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                            <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            <a href="#" className="btn add-to-cart">Add To Cart</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
                                    <div className="product product-style-3 equal-elem ">
                                        <div className="product-thumnail">
                                            <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                <figure><img src="assets/images/products/digital_21.jpg" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                            <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            <a href="#" className="btn add-to-cart">Add To Cart</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
                                    <div className="product product-style-3 equal-elem ">
                                        <div className="product-thumnail">
                                            <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                <figure><img src="assets/images/products/digital_15.jpg" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                            <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            <a href="#" className="btn add-to-cart">Add To Cart</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
                                    <div className="product product-style-3 equal-elem ">
                                        <div className="product-thumnail">
                                            <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                <figure><img src="assets/images/products/digital_17.jpg" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                            <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            <a href="#" className="btn add-to-cart">Add To Cart</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
                                    <div className="product product-style-3 equal-elem ">
                                        <div className="product-thumnail">
                                            <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                <figure><img src="assets/images/products/digital_05.jpg" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                            <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            <a href="#" className="btn add-to-cart">Add To Cart</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
                                    <div className="product product-style-3 equal-elem ">
                                        <div className="product-thumnail">
                                            <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                <figure><img src="assets/images/products/digital_07.jpg" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                            <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            <a href="#" className="btn add-to-cart">Add To Cart</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
                                    <div className="product product-style-3 equal-elem ">
                                        <div className="product-thumnail">
                                            <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                <figure><img src="assets/images/products/digital_02.jpg" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                            <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            <a href="#" className="btn add-to-cart">Add To Cart</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
                                    <div className="product product-style-3 equal-elem ">
                                        <div className="product-thumnail">
                                            <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                <figure><img src="assets/images/products/digital_09.jpg" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                            <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            <a href="#" className="btn add-to-cart">Add To Cart</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
                                    <div className="product product-style-3 equal-elem ">
                                        <div className="product-thumnail">
                                            <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                <figure><img src="assets/images/products/digital_06.jpg" alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                            </a>
                                        </div>
                                        <div className="product-info">
                                            <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                            <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            <a href="#" className="btn add-to-cart">Add To Cart</a>
                                        </div>
                                    </div>
                                </li>

                            </ul>

                        </div>

                    </div>
                 

                </div>
            </div>
        </div>


    );
}

export default ShopPage;