import React from 'react';
import logo from './logo.svg';
import './Toggle.scss';

function Toggle() {
	return (
		<div className="Toggle">
			<p>Make the logo show and disappear when clicking on the button.</p>
			<button>Show / Hide</button>
			<div className="Toggle__logo-wrapper">
				<img src={logo} alt="logo" />
			</div>
		</div>
	)
}

export default Toggle;
