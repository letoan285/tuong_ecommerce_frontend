import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import './style.scss';
import { mockData,IMockData   } from '../../../data/mock-data';
import CountDown from "./countdown";
import '../style.scss';

interface Props { }
interface State {
    time: number;
    onSaleProducts: IMockData[];
}

export default class OnSales extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            time: 100000,
            onSaleProducts: []
        }
    }

    componentDidMount() {
        const saleProducts = mockData.filter((item) => item.isSale);
        setInterval(() => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    onSaleProducts: saleProducts,
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

                    <h5> On Sale </h5>
                </div>
                <div className="count_downs">
                    <CountDown />
                    {/* <p>{Math.round(this.state.time / (60 * 60))} h : {Math.round(this.state.time / (60))} p:  {this.state.time} s</p> */}
                </div>
                <Slider {...settings}>

                    {
                        this.state.onSaleProducts.map((item: IMockData) => {
                            return (
                                <div className="product_container" key={item.id}>
                                    <div className="sale">

                                        <span className="product-trend-label">Sale</span>
                                        <span className="product-discount-label">- {item.sale}</span>
                                    </div>
                                    <div className="image">
                                        <Link to={`/products/${item.id}`}>

                                            <img className="pic-1" src={item.src} />
                                        </Link>
                                    </div>

                                    <div className="price discount">
                                        <span>$ {item.price}</span> $ {item.price * (1-item.sale!)}
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