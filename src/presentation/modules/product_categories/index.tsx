import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Slider from "react-slick";
import './style.scss';

interface Props { }
interface State {
    time: number;
}

export default class ProductCategories extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            time: 100000
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    time: prevState.time - 1
                }
            })
        }, 1000)

    }

    // getCountDown = () => {

    //     return 
    // }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div className="container">
                <div className="on_sale">

                    <h5> Products Categories </h5>
                </div>
                <div className="latest-product__banner">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Smart Phone">
                            <h2>Sonet 1</h2>
                        </Tab>
                        <Tab eventKey="profile" title="Watch">
                            <h2>Sonet 2</h2>
                        </Tab>
                        <Tab eventKey="contact" title="Laptop">
                            <h2>Sonet 3</h2>
                        </Tab>
                        <Tab eventKey="tablet" title="Tablet">
                            <h2>Sonet 3</h2>
                        </Tab>
                    </Tabs>
                </div>
                <Slider {...settings}>

                    <div className="product_container">
                        <div className="sale">

                            <span className="product-trend-label">Sale</span>
                            <span className="product-discount-label">- {'20 %'}</span>
                        </div>
                        <div className="image">

                            <img className="pic-1" src={'assets/images/products/tools_equipment_1.jpg'} />
                        </div>

                        <div className="price discount">
                            <span>$ {12.00}</span> $ {11.00}
                        </div>
                    </div>



                    <div className="product_container">
                        <div className="sale">

                            <span className="product-trend-label">Sale</span>
                            <span className="product-discount-label">- {'20 %'}</span>
                        </div>
                        <div className="image">

                            <img className="pic-1" src={'assets/images/products/tools_equipment_2.jpg'} />
                        </div>

                        <div className="price discount">
                            <span>$ {12.00}</span> $ {11.00}
                        </div>
                    </div>

                    <div className="product_container">
                        <div className="sale">

                            <span className="product-trend-label">Sale</span>
                            <span className="product-discount-label">- {'20 %'}</span>
                        </div>
                        <div className="image">

                            <img className="pic-1" src={'assets/images/products/tools_equipment_3.jpg'} />
                        </div>

                        <div className="price discount">
                            <span>$ {12.00}</span> $ {11.00}
                        </div>
                    </div>

                    <div className="product_container">
                        <div className="sale">

                            <span className="product-trend-label">Sale</span>
                            <span className="product-discount-label">- {'20 %'}</span>
                        </div>
                        <div className="image">

                            <img className="pic-1" src={'assets/images/products/tools_equipment_4.jpg'} />
                        </div>

                        <div className="price discount">
                            <span>$ {12.00}</span> $ {11.00}
                        </div>
                    </div>

                    <div className="product_container">
                        <div className="sale">

                            <span className="product-trend-label">Sale</span>
                            <span className="product-discount-label">- {'20 %'}</span>
                        </div>
                        <div className="image">

                            <img className="pic-1" src={'assets/images/products/tools_equipment_5.jpg'} />
                        </div>

                        <div className="price discount">
                            <span>$ {12.00}</span> $ {11.00}
                        </div>
                    </div>

                    <div className="product_container">
                        <div className="sale">

                            <span className="product-trend-label">Sale</span>
                            <span className="product-discount-label">- {'20 %'}</span>
                        </div>
                        <div className="image">

                            <img className="pic-1" src={'assets/images/products/tools_equipment_2.jpg'} />
                        </div>

                        <div className="price discount">
                            <span>$ {12.00}</span> $ {11.00}
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}