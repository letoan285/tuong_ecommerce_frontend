import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { mockData, IMockData } from '../../../../data/mock-data';
import MostViewedProduct from '../MostViewedProduct';
import { removeCartitem } from '../../../redux/actions/carts';
// import "./style.css";

interface Props {
	removeCartitem: (cart: any) => void;
	cartData: any;
}
interface State {
	onSaleProducts: IMockData[];
	cartValue: number;
	carts: any[];
}

class ReviewCart extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			onSaleProducts: [],
			cartValue: 1,
			carts: []
		};
	}

	componentDidUpdate(){
		console.log('update Cart');
		
	}

	handleIncreaseQty = () => {
		this.setState(prevState => {
			return {
				...prevState,
				cartValue: prevState.cartValue + 1
			}
		})
	}
	handleDecreaseQty = () => {
		this.setState(prevState => {
			return {
				...prevState,
				cartValue: (prevState.cartValue -1) < 0 ? 0 : prevState.cartValue -1
			}
		})
	}

	handleRemoveCartItem = (cart: any) => {
		console.log(this.state.carts);
		console.log(cart);
		
		this.props.removeCartitem(cart);
		// console.log(cart);
		
	}

	render() {
		const {cartValue, carts} = this.state;
		if(!this.props.cartData.data){
			return (<h2>Loading...</h2>);
			
			// console.log('cartData', this.props.cartData);
		}
		
	
		return (
			<section className="shopping-cart">
				<main id="main" className="main-site">
					<div className="container">
						<div className="wrap-breadcrumb">
							<ul>
								<li className="item-link">
									<a href="#" className="link">
										home
									</a>
								</li>
								<li className="item-link">
									<span>login</span>
								</li>
							</ul>
						</div>
						<div className=" main-content-area">
							<div className="wrap-iten-in-cart">
								<h3 className="box-title">Products Name</h3>

								{ this.props.cartData.data.carts.map((item: any) => {
									return (
										<ul className="products-cart" key={item.id}>
											<li className="pr-cart-item">
												<div className="product-image">
													<figure>
														<img src={item.src} alt="" />
													</figure>
												</div>
												<div className="product-name">
													<a className="link-to-product" href="#">
													{item.productName}
													</a>
												</div>
												<div className="price-field produtc-price">
													<p className="price">${item.price}</p>
												</div>
												<div className="quantity">
													<div className="quantity-input">
														<input
															type="text"
															name="product-quatity"
															value={item.quantity}
															data-max={120}
															pattern="[0-9]*"
														/>
														<a onClick={this.handleIncreaseQty} className="btn btn-increase" href="#" />
														<a onClick={this.handleDecreaseQty} className="btn btn-reduce" href="#" />
													</div>
												</div>
												<div className="price-field sub-total">
													<p className="price">$256.00</p>
												</div>
												<div className="delete">
													<a href="#" className="btn btn-delete" onClick={() => this.handleRemoveCartItem(item)}>
														<span>Delete from your cart</span>
														<i className="fa fa-times-circle" aria-hidden="true" />
													</a>
												</div>
											</li>
										</ul>
									);
								})}
							</div>
							<div className="summary">
								<div className="order-summary">
									<h4 className="title-box">Order Summary</h4>
									<p className="summary-info">
										<span className="title">Subtotal</span>
										<b className="index">$512.00</b>
									</p>
									<p className="summary-info">
										<span className="title">Shipping</span>
										<b className="index">Free Shipping</b>
									</p>
									<p className="summary-info total-info ">
										<span className="title">Total</span>
										<b className="index">$512.00</b>
									</p>
								</div>
								<div className="checkout-info">
									<label className="checkbox-field">
										<input
											className="frm-input "
											name="have-code"
											id="have-code"
											defaultValue=""
											type="checkbox"
										/>
										<span>I have promo code</span>
									</label>
									<a className="btn btn-checkout" href="checkout.html">
										Check out
									</a>
									<a className="link-to-shop" href="shop.html">
										Continue Shopping
										<i className="fa fa-arrow-circle-right" aria-hidden="true" />
									</a>
								</div>
								<div className="update-clear">
									<a className="btn btn-clear" href="#">
										Clear Shopping Cart
									</a>
									<a className="btn btn-update" href="#">
										Update Shopping Cart
									</a>
								</div>
							</div>
						<MostViewedProduct/>
						</div>
					</div>
				</main>
			</section>
		);
	}
}

const mapStateToProps = (state: any) => {
    return {
        propsData: state.productsReducer,
        cartData: state.cartsReducer
    }
  }
  
  const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        removeCartitem
    },
    dispatch
  )
  
export default connect(mapStateToProps, mapDispatchToProps)(ReviewCart);
