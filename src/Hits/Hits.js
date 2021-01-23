import React, {useEffect, useState} from 'react';
import './Hits.scss';

const fetchURL = "https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json";

function Hits() {
	const [data, setData] = useState(null);
	const getData = () =>
		fetch(`${fetchURL}`)
			.then((res) => res.json())



	useEffect(() => {
		getData().then((data) => setData(data))

	},[])

	return (
		<div>
			{data?.map((item, index) =>
				<ul>
					<li key={index}>{item.title}</li>
					{/*{data.map(item => <li key={item.title}>{item.title}</li>)}*/}
				</ul>
			)}
		</div>

	)
}

export default Hits;
