import React, { Component } from 'react';
import ReviewCard from './ReviewCard';

class Reviews extends Component {
  render() {
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
						<div className="col-md-4 col-sm-6">
							<ReviewCard/>							
						</div>
						<div className="col-md-4 col-sm-6">
							<ReviewCard/>							
						</div>
						<div className="col-md-4 col-sm-6">
							<ReviewCard/>							
						</div>
						<div className="col-md-4 col-sm-6">
							<ReviewCard/>							
						</div>
						<div className="col-md-4 col-sm-6">
							<ReviewCard/>							
						</div>
						<div className="col-md-4 col-sm-6">
							<ReviewCard/>							
						</div>
					</div>
				</div>
			</section>
	  );
  }
}

export default Reviews;
