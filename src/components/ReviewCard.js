import React from 'react';

const ReviewCard = function(props){
	var imageList = []
	
	for(var i = 0; i < props.review.images.length; i++){
 		if(i < 7){
			imageList.push(
				<li>
					<img className="img-responsive" src={props.review.images[i]} alt="User Review Images"/>
				</li>
			)
		} else {
			imageList.push(
				<li>
					<img className="img-responsive" src={props.review.images[i]} alt="User Review Images"/>
					<span className="last-image">+{props.review.images.length - 8}</span>
				</li>
			)
			break;
		}
	}
	
	return (
		<div className="card small">
			<div className="row">
				<div className="col-md-3 col-sm-2 user-area user-area-no-margin">
					<img className="img-responsive img-circle user-image" src={props.user.profile} alt="Profile"/>
				</div>
				<div className="col-md-7 col-sm-7 user-area user-area-no-margin">
					<p className="user-name">{props.user.name}</p>
					<p className="user-review-date">{props.review.date}</p>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 col-sm-12 user-area">
					<p className="user-review-name">
						<a href="/tours/snorkeling-and-fishing-in-coco-beach-goa">
						{props.review.tour}
						</a>
					</p>
				</div>
			</div>
			<div className="col-md-12 col-sm-12">
				<div className="card-content">
					<p className="user-review">{props.review.post}</p>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 col-sm-12 card-images-bottom">
					<ul className="review-card-images">
						{imageList}
					</ul>
				</div>
			</div>
		</div>					
	);
}

ReviewCard.defaultProps = {
	user: {
		profile: 'https://images.thrillophilia.com/image/upload/s--YJwLKgG6--/c_fill,f_auto,fl_strip_profile,h_150,q_auto,w_150/v1/sampling_images/photos/000/000/058/original/1485441297_51.png.jpg?1485441297',
		name: 'Naveen Adiga'
	},
	review: {
		tour: 'Snorkeling, Sightseeing and Fishing on a Luxury Cruise at Britona',
		date: '11 January 2016',
		post: 'An unforgettable experience for me. For the first time got a chance to get into snorkeling and see the marine life. Thanks alot guys for an amazing experience.',
		images: [
			'https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922',
			'https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922',
			'https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922',
			'https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922',
			'https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922',
			'https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922',
			'https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922',
			'https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922',
			'https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922',
			'https://images.thrillophilia.com/image/upload/s--JibbY6NT--/c_fill,f_auto,fl_strip_profile,h_70,q_auto,w_70/v1/uploads/photos/000/002/231/original/https___prisonbreak.thrillophilia.com_admin_reviews_3789-1.jpg.jpg?1452687922'
		] 
	}
}

export default ReviewCard;