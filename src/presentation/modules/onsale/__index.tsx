import React, { useEffect, useState } from "react";

import "./style.css";

const Images = [
  {id: 1, name: 'Product 1', src: 'assets/images/products/tools_equipment_1.jpg', discount: '20%', sale: true, list_price: 1200, sale_price: 800},
  {id: 2, name: 'Men\'s Blazer', src: 'assets/images/products/tools_equipment_2.jpg', discount: '20%', sale: false, list_price: 500, sale_price: 200},
  {id: 3, name: 'Men\'s Blazer', src: 'assets/images/products/tools_equipment_3.jpg', discount: '20%', sale: true, list_price: 1100, sale_price: 900},
  {id: 4, name: 'Product 1', src: 'assets/images/products/tools_equipment_4.jpg', discount: '20%', sale: true, list_price: 1900, sale_price: 1600},
  {id: 5, name: 'Product 5', src: 'assets/images/products/tools_equipment_5.jpg', discount: '20%', sale: false, list_price: 1900, sale_price: 1600},
  {id: 6, name: 'Product 6', src: 'assets/images/products/tools_equipment_6.jpg', discount: '30%', sale: true, list_price: 1900, sale_price: 1600},
];

const OnSales = () => {
  const [slides, setSlides] = useState<any[]>([]);

  const handleSlide = (direction: string) => {
    let firstProduct = Images[0];
    let lastProduct = Images[Images.length-1];

    // console.log(firstIndex);
    if(direction === 'left'){
      let firstIndex = slides[0];
      let temImage = [];
      if(slides[0] !== firstProduct ){
        temImage = Images.slice(0, 4);
        // setSlides(temImage);
      } else {
        temImage = Images.slice(firstIndex, firstIndex+4);
      }
      setSlides(temImage);
    } else {
      let lastIndex = slides[Images.length-1];

    }
    
    console.log(firstProduct);
    // console.log(slides, direction);
    
    // setSlides
  }
  useEffect(() => {
    const defaultSlides = Images.slice(0, 4);
    setSlides(defaultSlides);
  }, []);
  return (
    // <div className="wrap-show-advance-info-box style-1 has-countdown">
    //   <h3 className="title-box">On Sale</h3>
    //   <div className="wrap-countdown mercado-countdown" data-expire="2020/12/12 12:34:56"></div>
    <div className="container on_sale">
      <div className="title">
        <h3 className="title-box">On Sale</h3>
      </div>
      <div className="countdown_sale">2020202020</div>
      <div className="row product_sale">
        <span onClick={() => handleSlide("left")} className="left">
        <i className="fa fa-arrow-circle-left"></i>
        </span>
        {slides.map((item, index) => {
          return (
            <div className="col-md-3 col-sm-6">
              <div className="product-grid">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="pic-1"
                      src={item.src}
                    />
     
                  </a>
                  { item.sale && <span className="product-trend-label">Sale</span>}
                  <span className="product-discount-label">- {item.discount}</span>
   
                </div>
                <div className="product-content">
                  <h3 className="title">
                  <a href="#">{item.name}</a>
                  </h3>
                  <div className="price discount">
                    <span>$ {item.list_price}</span> $ {item.sale_price}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <span className="right" onClick={() => handleSlide("right")}>
          <i className="fa fa-arrow-circle-right"></i>
        </span>
      </div>
    </div>
  );
};

export default OnSales;
