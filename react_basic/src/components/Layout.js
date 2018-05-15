import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header'
import Footer from './Footer'
import Body from './Body'
class Layout extends Component {
  render() {
    return (
    	<div>
			<Header/>
			<Body/>
			<Footer/>
    	</div>
     
    );
  }
}

export default Layout;
