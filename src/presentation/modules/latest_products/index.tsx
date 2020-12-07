import React, { Component } from "react";
import Slider from "react-slick";
import './style.scss';

import { IMockData, mockData } from '../../../data/mock-data';

interface Props { }
interface State {
    time: number;
    latestProducts: IMockData[]
}

export default class LatestProducts extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            time: 100000,
            latestProducts: []
        }
    }

    componentDidMount() {
        const latestProducts = mockData.filter((item: IMockData) => item.isNew);
        this.setState(preveState => {
            return {
                ...preveState,
                latestProducts: latestProducts
            }
        })

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

                    <h5> Latest Product </h5>
                </div>
                <div className="latest-product__banner">
                    <img src={'assets/images/digital-electronic-banner.jpg'} />
                </div>
                <Slider {...settings}>

                    {
                        this.state.latestProducts.map((item: IMockData) => {
                            return (
                                <div className="product_container">
                                    <div className="sale">

                                        <span className="product-trend-label">Sale</span>
                                        <span className="product-discount-label">- {item.sale}</span>
                                    </div>
                                    <div className="image">

                                        <img className="pic-1" src={item.src} />
                                    </div>

                                    <div className="price discount">
                                        <span>$ {item.price}</span> $ {item.price*(1-item.sale!)}
                                    </div>
                                </div>

                            );
                        })
                    }











                </Slider>
            </div>
        );
    }
}