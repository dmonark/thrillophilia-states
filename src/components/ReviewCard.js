import React, { Component } from 'react';

class ReviewCard extends Component {
  render() {
    return (
			<div className="card small">
				<div className="row">
					<div className="col-md-3 col-sm-2 user-area user-area-no-margin">
						<img className="img-responsive img-circle user-image" src="https://images.thrillophilia.com/image/upload/s--YJwLKgG6--/c_fill,f_auto,fl_strip_profile,h_150,q_auto,w_150/v1/sampling_images/photos/000/000/058/original/1485441297_51.png.jpg?1485441297" />
					</div>
					<div className="col-md-7 col-sm-7 user-area user-area-no-margin">
						<p className="user-name">Naveen Adiga</p>
						<p className="user-review-date">11 January 2016</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 col-sm-12 user-area">
						<p className="user-review-name">
							<a href="/tours/snorkeling-and-fishing-in-coco-beach-goa">
								Snorkeling, Sightseeing and Fishing on a Luxury Cruise at Britona
							</a>
						</p>
					</div>
				</div>
				<div className="col-md-12 col-sm-12">
					<div className="card-content">
						<p className="user-review">An unforgettable experience for me. For the first time got a chance to get into snorkeling and see the marine life. Thanks alot guys for an amazing experience. </p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 col-sm-12 card-images-bottom">
						<ul className="review-card-images">
							<li>
								<img className="img-responsive" src="https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922" />
							</li>
							<li>
								<img className="img-responsive" src="https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922" />
							</li>
							<li>
								<img className="img-responsive" src="https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922" />
							</li>
							<li>
								<img className="img-responsive" src="https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922" />
							</li>
							<li>
								<img className="img-responsive" src="https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922" />
							</li>
							<li>
								<img className="img-responsive" src="https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922" />
								<span className="last-image">+2</span>
							</li>
						</ul>
					</div>
				</div>
			</div>					
	  );
  }
}

export default ReviewCard;