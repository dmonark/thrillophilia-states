import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = function(props) {
	const reviewList = []
	
	for(var i = 0; i < props.data.length; i++){
		reviewList.push(
			<div className="col-md-4 col-sm-6">
				<ReviewCard/>							
			</div>
		)
	}
	
	return (
		<section className="reviews-section">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-8 col-md-8 col-sm-8">
						<p className="recommendation-text section-heading">Traveller Tales from Goa</p>
					</div>
					<div className="col-md-4 col-xs-4 col-sm-4">
						<a className="pull-right show-all-btn" href="/states/goa/reviews">See All</a>
					</div>
				</div>
				<div className="row">
					{reviewList}
				</div>
			</div>
		</section>
	);
}

Reviews.defaultProps = {
	data: [
		{},
		{},
		{},
		{},
		{},
		{}
	]
}
export default Reviews;
