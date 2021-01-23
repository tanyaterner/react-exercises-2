import React, {useState, isNan} from 'react';
import './RealNumber.scss';

function RealNumber() {

	const [isHiden ,setHiden]= useState(false)

	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function handleInput(event) {
		setHiden(isNumeric(event.target.value) === false);
	}

	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>

			<input type="text" onChange={handleInput}  className="text-box" />
			<button hidden={isHiden}>Submit</button>
		</div>
	)
}

export default RealNumber;
