/** @format */

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Test() {
	const [movieRating, setMovieRating] = useState(0);

	return (
		<div>
			<StarRating maxRating={5} color='blue' onSetRating={setMovieRating} />
			<p>This movie was rated {movieRating} stars</p>
		</div>
	);
}
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<StarRating
			maxRating={5}
			messages={['Terrible', 'bad', 'medium', 'sexy', 'Beast']}
		/>
		<StarRating
			maxRating={7}
			color='green'
			size={24}
			className='test'
			defaultRating={2}
		/>
		<Test />
	</React.StrictMode>
);
