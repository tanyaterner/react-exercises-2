import React from 'react';
import './Timer.scss';

function Timer() {
	return (
		<div className="Timer">
			<h3>Timer</h3>
			<p>
				Make a timer that counts the seconds.
				Update it every second.
			</p>
			<div className="Timer__value">0</div>
		</div>
	)
}

export default Timer;
