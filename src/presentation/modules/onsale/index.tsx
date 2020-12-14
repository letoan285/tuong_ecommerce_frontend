import React, { Component, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Slider from "react-slick";
import './style.scss';
import { mockData,IMockData   } from '../../../data/mock-data';
import CountDown from "./countdown";
import '../style.scss';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from '../../redux/actions/carts';

interface Props {
    propsData: any;
    addToCart: (product: any) => void;
    // history: any;
}
interface State {
    time: number;
    onSaleProducts: IMockData[];
}

const OnSales  = ({propsData,cartData, addToCart: handleAddToCart}: any) => {
    
    const history: any = useHistory();

 
    const addToCart = (product: any) => {
        const cart = {
            id: product.id,
            productName: product.name,
            src: product.image,
            price: product.price,
            quantity: 1
        }
    
        handleAddToCart(cart);
        setTimeout(() => {
            history.push('/cart.html');

        }, 100);
        
        
    }
   
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        // console.log('render', this.props.propsData);
        
        
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
                        propsData.data.map((item: any) => {
                            return (
                                <div className="product_container" key={item.id}>
                                    <div className="sale">

                                        {item.price < item.list_price && <span className="product-trend-label">Sale</span>}

                                        <span className="product-discount-label"> {item.sale}</span>
                                    </div>
                                    <div className="image">
                                        <Link to={`/products/${item.id}`}>

                                            <img className="pic-1" src={item.image} />
                                        </Link>
                                        <div>
                                            <button className="btn btn-primary float-left" onClick={() => addToCart(item)}>Add To Cart</button>
                                            <Link className="btn btn-success float-right" to={`/products/${item.id}`}>

                                            View More
                                        </Link>
                                        </div>
                                    </div>

                                    <div className="price discount">
                                        <span className="sell_price">$ {item.price}</span> - <span className="list_price">$ {item.list_price}</span> 
                                    </div>
                                </div>

                            );
                        })
                    }



                </Slider>
            </div>
        );
    
}


const mapStateToProps = (state: any) => {
    return {
        propsData: state.productsReducer,
        cartData: state.cartsReducer
    }
  }
  
  const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        addToCart
    },
    dispatch
  )
  
  export default connect(mapStateToProps, mapDispatchToProps)(OnSales);