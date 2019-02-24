import React from 'react';

const ProductCard = function(props) {
	var tagsList = []
	for(var i = 0; i< props.tags.length; i++){
		tagsList.push(
			<div className="name" style={{color: "#fff", background: "purple"}}>{props.tags[i].title}</div>		
		)
	}
	return (
		<div className="card">
			<div className="cashback">Cashback {props.cashback}*</div>
			<div className="tags">
			{tagsList}
			</div>
			<div className="hovereffect">
				<div className="card-image">
					<img alt="Product" src={props.poster} />
				</div>
				<div className="card-content card-content-has-padding">
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12 name-tour">
							<p className="tours-name">
								<a href={props.url}>{props.name}</a>
							</p>
						</div>
					</div>
					<div className="desces">
						<div className="row">
							<div className="col-md-6 col-sm-6 col-xs-6">
								<p className="price">
									<i className="fa fa-inr rupee-symbol"></i> {props.price}
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 col-sm-6 col-xs-6">
								{
									props.originalPrice ? ( 
										<p className="original-price">
											<i className="fa fa-inr rupee-symbol"></i> 499
										</p> 
									) : null
								}
							</div>
							<div className="col-md-6 col-sm-6 col-xs-6 ratings">
								<span className="users-review-count-card pull-right countofreviews">{props.ratings.count} ratings</span>
							</div>
						</div>
					</div>
				</div>
				<div className="overlay">
					<div className="col-md-12 col-sm-12 col-xs-12 name-tour">
						<p className="tours-name">
							<a href={props.url}>{props.name}</a>
						</p>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12 name-tour">
						<div className="overlay-card-description">
							{props.desc}
						</div>
					</div>
					<a className="btn book-now-btn" href="/tours/north-goa-sightseeing-tour">Book Now</a>
				</div>
			</div>
		</div>
	);
}

ProductCard.defaultProps = {
	cashback: 500,
	tags: [
		{
			title: "Featured"
		},{
			title: "Featured"
		},{
			title: "Featured"
		}
	],
	poster: "https://images.thrillophilia.com/image/upload/s--ZVitChQP--/c_fill,f_auto,fl_strip_profile,h_450,q_auto,w_400/v1/images/photos/000/046/531/original/1517392970_A-Looksie-into-North-Goa.png.jpg?1517392970",
	url: "/tours/north-goa-sightseeing-tour",
	name: "Pub Crawl, Goa",
	price: 399,
	originalPrice: 499,
	desc: "TO BOOK, CALL ON 9784906622 !About the Activity:Embark on this amazing sightseeing tour in North Goa and get a chance to explore the stunning beauty of this region.Start your trip after getting picked up from the hotel at around 07:30 AM by bus.Explore some of the most favourite tourist spots of this region with the beautiful sights.This tour includes a visit to the famous Fort Aguada, Anjuna Beach...",
	ratings:{
		count: 1999,
		star: 4
	},
	
}

export default ProductCard;
