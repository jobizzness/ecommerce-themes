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
              <div className="icons">
                <a href=''>  <FontAwesome
                  className='super-crazy-colors'
                  name='cart-plus'
                  size='2x'

                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /></a>

                <a href=""> <FontAwesome
                  className='super-crazy-colors'
                  name='search'
                  size='2x'

                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /></a>
               <a href="">
                 <FontAwesome
                   className='super-crazy-colors'
                   name='bars'
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
          ffdf
      </div>
        <div className="second-layout-second">
          bvbxb
        </div>
        <div className="second-layout-third">
          gfg
        </div>
      </div>

      <div className="trending-collection">
        <h2>Trending Collection</h2>
      </div>

      <div className="cards-layout">

      </div>
    </div>
  );
};

  export default App;
