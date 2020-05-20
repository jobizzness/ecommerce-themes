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
    </div>
  );
};

  export default App;
