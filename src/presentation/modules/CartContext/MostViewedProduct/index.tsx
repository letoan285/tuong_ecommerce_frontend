import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { mockData, IMockData } from '../../../../data/mock-data';
// import "./style.css";

interface Props {}
interface State {
	onSaleProducts: IMockData[];
}

export default class MostViewedProduct extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			onSaleProducts: [],
		};
	}

	componentDidMount() {
		const saleProducts = mockData.filter((item) => item.isSale);
		setInterval(() => {
			this.setState((prevState) => {
				return {
					...prevState,
					onSaleProducts: saleProducts,
				};
			});
		}, 1000);
	}

	render() {
		const settings = {
			// infinite: true,
			// slidesToShow: 4,
			// slidesToScroll: 1,
			// autoplay: true,
			// speed: 2000,
			// autoplaySpeed: 2000,
			//  cssEase: "linear"

			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			// autoplay: true,
			// speed: 12000,
			// autoplaySpeed: 12000,
			// cssEase: "linear",

			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};

		return (
			<div className="container most-viewed-product">
				<div className="title">
					<h3 className="title-box">MostViewedProduct</h3>
				</div>

				<Slider {...settings}>
					{this.state.onSaleProducts.map((item: IMockData) => {
						return (
							<div className="product-grid" key={item.id}>
								<Link to={`/products/${item.id}`}>
									<div className="product-image">
										<img className="pic-1" src={item.src} />

										<span className="product-new-label">NEW</span>
										<span className="product-discount-label">-{2}%</span>
										<ul className="social">
											<li>
												<a href="#" data-tip="Add to Cart">
													<i className="fa fa-shopping-cart"></i>
												</a>
											</li>
											<li>
												<a href="#" data-tip="Wishlist">
													<i className="fa fa-heart"></i>
												</a>
											</li>
											{/* <li><a href="#" data-tip="Compare"><i className="fa fa-random"></i></a></li> */}
											<li>
												<a href="#" data-tip="Quick View">
													<i className="fa fa-search"></i>
												</a>
											</li>
										</ul>
									</div>

									<div className="product-content">
										<h3 className="title">
											<Link to={`/products/${item.id}`}>{item.name}</Link>
										</h3>
										<div className="price discount">
											<span>${item.price}</span> $
											{item.price - item.price * (2 / 100)}
										</div>
									</div>
								</Link>
							</div>
						);
					})}
				</Slider>
			</div>
		);
	}
}
