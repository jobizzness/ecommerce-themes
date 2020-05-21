import React, { useEffect, useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';

export const App = () => {
  let FontAwesome = require('react-fontawesome');

  return (
    <div className="container">
      <div className="nav-container">
             <div className="hamburger" >
              <div className="line"></div>
              <div className="line"></div>

              <div className="line"></div>

            </div>
             <div className="logo">
              <h2>logo</h2>
             </div>
              <div className="menu">
                 <ul className="nav-links">
                  <li><a href="#">Home</a> </li>
                  <li><a href="#">About</a> </li>

                  <li><a href="#">test</a> </li>

                  <li><a href="#">dded</a> </li>

                </ul>
              </div>
              <div className="icons-top">
                <a href=""> <FontAwesome
                  className='super-crazy-colors'
                  name='search'
                  size='2x'

                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /></a>
                <a href=''>  <FontAwesome
                  className='super-crazy-colors'
                  name='cart-plus'
                  size='2x'

                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /></a>


               <a href="">
                 <FontAwesome
                   className='super-crazy-colors'
                   name='user'
                   size='2x'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                 />
               </a>


               </div>
      </div>

      <div>
        <div className="hero">

          <div className="hero-left">

             <div className="hero-left-top">

             </div>
             <div className="hero-left-middle">

             </div>
             <div className="hero-left-last">

             </div>

          </div>
        <div className="hero-right">

            <div className="list">
             </div>
        </div>
        </div>
      </div>

      <div className="second-layout">
           <div className="second-layout-first">

               <div className="second-layout-first-half">
                   <div className="second-layout-first-half-top">
                </div>
                   <div className="second-layout-first-half-middle">
                         <h1> Flash Sales</h1>
                         <div className="sales-text">
                         <p>Our sale ends at 10pm, so stop by before it’s too late.</p>
                   </div>
                   <div className="sales-button"> <button>Shop Now</button></div>
            </div>
            <div className="second-layout-first-half-bottom">

            </div>
          </div>
        <div className="second-layout-first-otherHalf">

        </div>
      </div>

           <div className="second-layout-sec">

          <div className="second-layout-first-half">
            <div className="second-layout-first-half-top">

            </div>
            <div className="second-layout-first-half-middle">
              <h1> Mega Offer</h1>
              <div className="sales-text">
                <p>Get 25% of your purchase!</p>
              </div>
              <div className="sales-button"> <button>Shop Now</button></div>

            </div>

            <div className="second-layout-first-half-bottom">

            </div>
          </div>
          <div className="second-layout-first-otherHalf">

          </div>
        </div>

           <div className="second-layout-th">

          <div className="second-layout-first-half">
            <div className="second-layout-first-half-top">

            </div>
            <div className="second-layout-first-half-middle">
              <h1> Best Sales</h1>
              <div className="sales-text">
                <p>The first 10 purchases of the day get $5 off, so get here quick!</p>
              </div>
              <div className="sales-button"> <button>Shop Now</button></div>

            </div>
            <div className="second-layout-first-half-bottom">

            </div>
          </div>
          <div className="second-layout-first-otherHalf">

          </div>
        </div>



      </div>

      <div className="trending-collection">
        <h2>Trending Collection</h2>
      </div>

      <div className="cards-layout">
        <div className="card">
          <div className="price-corner"></div>
          <div className="img-wrapper">
            <img src="https://cdn.shopify.com/s/files/1/0978/4862/files/Andro_Clothing_Banner_1200x.png?v=1572882213" alt="" />
          </div>
          <div className="content-wrapper">
            <h3 className="title">Men Sweatshirt</h3>
            <p className="price">25,99 €</p>
            <div className="inner-content-wrapper">
              <p className="sizes">sizes :
                <span className="active">S</span> |
                <span>M</span> |
                <span className="active">L</span> |
                <span>XL</span>
              </p>
              <div className="colors">
                <div className="color color1"></div>
                <div className="color color2"></div>
                <div className="color color3"></div>
                <div className="color color4"></div>
              </div>
              <div className="icons">
                <span className="icon icon1">    <FontAwesome
                  className='super-crazy-colors'
                  name='globe-europe'
                  size='3x'

                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /></span>
                <span className="icon icon2">
                  <FontAwesome
                  className='super-crazy-colors'
                  name='cart-plus'
                  size='1x'

                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /></span>
                <span className="icon icon3">
                  {/*<i className="far fa-heart"></i>*/}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="price-corner"></div>
          <div className="img-wrapper">
            <img src="https://cdn.shopify.com/s/files/1/1151/7606/files/Men_2.progressive.jpg" alt="" />
          </div>
          <div className="content-wrapper">
            <h3 className="title">Men Hoodie</h3>
            <p className="price">15,99 €</p>
            <div className="inner-content-wrapper">
              <p className="sizes">sizes :
                <span className="active">S</span> |
                <span>M</span> |
                <span className="active">L</span> |
                <span>XL</span>
              </p>
              <div className="colors">
                <div className="color color1"></div>
                <div className="color color2"></div>
                <div className="color color3"></div>
                <div className="color color4"></div>
              </div>
              <div className="icons">
                <span className="icon icon1">    <FontAwesome
                  className='super-crazy-colors'
                  name='globe-europe'
                  size='1x'

                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /></span>
                <span className="icon icon2"> <FontAwesome
                  className='super-crazy-colors'
                  name='cart-plus'
                  size='1x'

                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /></span>
                <span className="icon icon3">
                  {/*<i className="far fa-heart"></i>*/}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="price-corner"></div>
          <div className="img-wrapper">
            <img src="https://images.squarespace-cdn.com/content/v1/5c2e7be7f407b45dcc790f2e/1548894446243-UGWA4CWSZCI7LQVGPEXA/ke17ZwdGBToddI8pDm48kBAut00wQc9lpuref3lcQdh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hReLB75oIvKxcDxwlnLXaYRx2phLrvcPb0FE9Yyguq_g8JFu81njT5nQWvWdu_L0w/Clothing%2Bbanner.jpg" alt="" />
          </div>
          <div className="content-wrapper">
            <h3 className="title">Bags </h3>
            <p className="price">9,99 €</p>
            <div className="inner-content-wrapper">
              <p className="sizes">sizes :
                <span className="active">S</span> |
                <span>M</span> |
                <span className="active">L</span> |
                <span>XL</span>
              </p>
              <div className="colors">
                <div className="color color1"></div>
                <div className="color color2"></div>
                <div className="color color3"></div>
                <div className="color color4"></div>
              </div>
              <div className="icons">
                <span className="icon icon1">    <FontAwesome
                  className='super-crazy-colors'
                  name='globe-europe'
                  size='1x'

                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /></span>
                <span className="icon icon2"> <FontAwesome
                  className='super-crazy-colors'
                  name='cart-plus'
                  size='1x'

                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /></span>
                <span className="icon icon3">
                  {/*<i className="far fa-heart"></i>*/}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="price-corner"></div>
          <div className="img-wrapper">
            <img src="https://i.pinimg.com/236x/eb/ee/44/ebee44ae0af290b128109c6ebd0ff6c0--converse-fashion-movement-photography.jpg" alt="" />
          </div>
          <div className="content-wrapper">
            <h3 className="title">Men Leather Jackets</h3>
            <p className="price">50,99 €</p>
            <div className="inner-content-wrapper">
              <p className="sizes">sizes :
                <span className="active">S</span> |
                <span>M</span> |
                <span className="active">L</span> |
                <span>XL</span>
              </p>
              <div className="colors">
                <div className="color color1"></div>
                <div className="color color2"></div>
                <div className="color color3"></div>
                <div className="color color4"></div>
              </div>
              <div className="icons">
                <span className="icon icon1">
                   <FontAwesome
                     className='super-crazy-colors'
                     name='globe-europe'
                     size='1x'

                     style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                   />
                   </span>
                <span className="icon icon2"> <FontAwesome
                  className='super-crazy-colors'
                  name='cart-plus'
                  size='1x'

                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /></span>
                <span className="icon icon3">
                  {/*<i className="far fa-heart"></i>*/}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

  export default App;
