import React, { Component } from 'react';

class Recommendations extends Component {
  render() {
    return (
			<div className="card">
				<div className="cashback">Cashback 500*</div>
				<div className="tags">
					<div className="name">Featured</div>
				</div>
				<div className="hovereffect">
					<div className="card-image">
						<img src="https://images.thrillophilia.com/image/upload/s--ZVitChQP--/c_fill,f_auto,fl_strip_profile,h_450,q_auto,w_400/v1/images/photos/000/046/531/original/1517392970_A-Looksie-into-North-Goa.png.jpg?1517392970" />
					</div>
					<div className="card-content card-content-has-padding">
						<div className="row">
							<div className="col-md-12 col-sm-12 col-xs-12 name-tour">
								<p className="tours-name">
									<a href="/tours/north-goa-sightseeing-tour">Pub Crawl, Goa</a>
								</p>
							</div>
						</div>
						<div className="desces">
							<div className="row">
								<div className="col-md-6 col-sm-6 col-xs-6">
									<p className="price">
										<i className="fa fa-inr rupee-symbol"></i> 399
									</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6 col-sm-6 col-xs-6">
									<p className="original-price">
										<i className="fa fa-inr rupee-symbol"></i> 499
									</p>
								</div>
								<div className="col-md-6 col-sm-6 col-xs-6 ratings">
									<span className="users-review-count-card pull-right countofreviews">1109 ratings</span>
								</div>
							</div>
						</div>
					</div>
					<div className="overlay">
						<div className="col-md-12 col-sm-12 col-xs-12 name-tour">
							<p className="tours-name">
								<a href="/tours/north-goa-sightseeing-tour">North Goa Sightseeing Full Day Tour - Flat 16% Off</a>
							</p>
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12 name-tour">
							<div className="overlay-card-description">
								TO BOOK, CALL ON 9784906622 !About the Activity:Embark on this amazing sightseeing tour in North Goa and get a chance to explore the stunning beauty of this region.Start your trip after getting picked up from the hotel at around 07:30 AM by bus.Explore some of the most favourite tourist spots of this region with the beautiful sights.This tour includes a visit to the famous Fort Aguada, Anjuna Beach...
							</div>
						</div>
						<a className="btn book-now-btn" href="/tours/north-goa-sightseeing-tour">Book Now</a>
					</div>
				</div>
			</div>
	  );
  }
}

export default Recommendations;
