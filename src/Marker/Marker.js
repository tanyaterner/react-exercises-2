import React, { useState } from 'react';
import './Marker.scss';
import Highlighter from "react-highlight-words";

function Marker() {

	const [items, setItems] = useState([
		"First item",
		"Second special item",
		"Third item",
		"Fourth special item",
	]);
	const [input, setInput] = useState("");

	function handleInput(e){
		setInput(e.target.value)
	}

	return (
		<div className="Marker">
			<p>
				Display a list of all items in the state.<br />
				If the value in the input can be found within the items - <span className="marker">marker</span> it.<br />
				Example: if the input value is "elf" then item "shelf" should look like: sh<span className="marker">elf</span>.
				Apply the marker for <u>all items</u>.
			</p>

			<input type="text" onChange={handleInput}  placeholder="Text to marker..." />
			<ul>
				{items.map((name ,index ) => {
					return <li key={index}>{
						<Highlighter
						highlightClassName="YourHighlightClass"
						searchWords={[input]}
						autoEscape={true}
						textToHighlight={name}
					/>
					}</li>
				})}
			</ul>
		</div>
	)
}

export default Marker;
