import React from 'react';

import LogoImg from '../../assets/images/logo.svg';
import './Logo.scss';

const Logo = () => {

	return (
		<div className="my-logo">
			<img className='image' src={LogoImg} alt="logo"/>
			<h1 className='title'>Company name</h1>
		</div>
	)
}

export default Logo;