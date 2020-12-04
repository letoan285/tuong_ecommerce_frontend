import React from 'react';
import range from 'lodash/range';
import styled from 'styled-components';
import "react-alice-carousel/lib/alice-carousel.css";
// import ItemsCarousel from './ItemsCarousel';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './style.css';

const handleDragStart = (e: any) => e.preventDefault();

const items = [
  <img src="https://cdn.tgdd.vn/Products/Images/42/213031/TimerThumb/iphone-12-blue-600x600-thumb-hen-gio.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src="https://bizweb.dktcdn.net/100/116/615/products/12pro.png?v=1602752545000" onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src="https://cdn.tgdd.vn/Products/Images/42/213031/TimerThumb/iphone-12-blue-600x600-thumb-hen-gio.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src="https://cdn.tgdd.vn/Products/Images/42/213031/TimerThumb/iphone-12-blue-600x600-thumb-hen-gio.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
  // <img src="https://bizweb.dktcdn.net/100/116/615/products/12pro.png?v=1602752545000" onDragStart={handleDragStart} className="yours-custom-class" />,
  // <img src="https://cdn.tgdd.vn/Products/Images/42/213031/TimerThumb/iphone-12-blue-600x600-thumb-hen-gio.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
  // <img src="https://cdn.tgdd.vn/Products/Images/42/213031/TimerThumb/iphone-12-blue-600x600-thumb-hen-gio.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
  // <img src="https://bizweb.dktcdn.net/100/116/615/products/12pro.png?v=1602752545000" onDragStart={handleDragStart} className="yours-custom-class" />,
  // <img src="https://cdn.tgdd.vn/Products/Images/42/213031/TimerThumb/iphone-12-blue-600x600-thumb-hen-gio.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
  // <img src="https://cdn.tgdd.vn/Products/Images/42/213031/TimerThumb/iphone-12-blue-600x600-thumb-hen-gio.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
  // <img src="https://bizweb.dktcdn.net/100/116/615/products/12pro.png?v=1602752545000" onDragStart={handleDragStart} className="yours-custom-class" />,
  // <img src="https://cdn.tgdd.vn/Products/Images/42/213031/TimerThumb/iphone-12-blue-600x600-thumb-hen-gio.jpg" onDragStart={handleDragStart} className="yours-custom-class" />,
];

const OnSale = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  return (
    <div className="container slider">
      <div className="card">
        <div className="card-title">
          <div className="title">
            <h5>On Sale</h5>

          </div>
          <div className="time">
            <i>time:2020202</i>
          </div>
        </div>
        <div className="card-body product__card">
          <div className="row product-box">

            <span onClick={() => alert('left')} className="left">{'<<'}</span>
            {
              items.map((item, index) => {
                return (
                  <div className="col-md-3 ">

          
                      <div className="pt-3">


                          <img key={index} src="https://cdn.tgdd.vn/Products/Images/42/213031/TimerThumb/iphone-12-blue-600x600-thumb-hen-gio.jpg" className="yours-custom-class" />
                      </div>
                      <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dignissimos debitis mollitia officiis dicta labor
                      </div>
                      <div> <strong> $ 250</strong></div>

                    </div>
       


                );
              })
            }
            <span className="right" onClick={() => alert('right')}>{'>>'}</span>
          </div>
        </div>
      </div>

    </div>

  );
}
export default OnSale;