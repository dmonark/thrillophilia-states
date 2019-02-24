import React from 'react';

const StarRating = function(props) {
  
	return (
		<p className={props.classText}>
			<i aria-hidden="true" className={props.rating >= 1 ? 'fa fa-star star-filled' : 'fa fa-star'}></i>
			<i aria-hidden="true" className={props.rating >= 2 ? 'fa fa-star star-filled' : 'fa fa-star'}></i>
			<i aria-hidden="true" className={props.rating >= 3 ? 'fa fa-star star-filled' : 'fa fa-star'}></i>
			<i aria-hidden="true" className={props.rating >= 4 ? 'fa fa-star star-filled' : 'fa fa-star'}></i>
			<i aria-hidden="true" className={props.rating == 5 ? 'fa fa-star star-filled' : 'fa fa-star'}></i>
			{
				props.count ? props.count + " Reviews" : null
			}
		</p>
	);
}

export default StarRating;
