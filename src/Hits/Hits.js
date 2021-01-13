import React from 'react';
import './Hits.scss';

function Hits() {
	return (
		<div className="Hits">
			<h3>Hits:</h3>
			<p>
				Use the following API to make a list of hit titles:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json</code>
			</p>
			<ul>

			</ul>
		</div>
	)
}

export default Hits;
