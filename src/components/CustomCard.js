import React from 'react';

const CustomCard = function(props){
  return (
		<div className={"card "+props.cardType}>
			<a href={props.url}>
				<div className="card-image">
					<img className="img-responsive" src={props.poster} alt="Poster"/>
				</div>
			</a>
			<div className={"card-content "+props.cardType+"-content"}>
				<p className="tours-name">
					<a href={props.url}>{props.title}</a>
				</p>
				<span>
				{props.desc}
				</span>
			</div>
			{
				props.cardType === "large" ? (
					<div>
						<div className="row">
							<div className="col-md-12">
								<div className="attraction-card">
									<p className="tours-name">
										<a href={props.tours[0].url}>{props.tours[0].title}</a>
									</p>
									<div className="row">
										<div className="col-md-11 attraction-card-btn">
											<p className="price pull-left">
												<i className="fa fa-inr rupee-symbol"></i> {props.tours[0].price}
											</p>
											<a className="more-info btn-sm pull-right" href={props.tours[0].url}>MORE INFO</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card-action">
							<a href="/attractions/calangute-beach">See {props.tours.length - 1} more tours</a>
						</div>
					</div>
				) : null
			}
		</div>					
	);
}

CustomCard.defaultProps= {
	url: "/attractions/calangute-beach",
	poster: "https://images.thrillophilia.com/image/upload/s--FyBvmuaZ--/c_fill,f_auto,fl_strip_profile,h_380,q_auto,w_604/v1/attractions/images/000/002/641/original/1503404123_19640571470_9dfeddc423_b.jpg.jpg?1503404123",
	title: "Calangute Beach",
	desc: "Deserving every reason to be called the ‘Queen of Beaches’ in Goa, Calangute Beach is a paradise for nature lovers holding the spectacular b...",
	tours: [
		{
			url: '/tours/parasailing-experience-at-calangute-beach-goa',
			title: 'Parasailing in Goas Calangute Beach - Flat 25% Off',
			price: 870
		},
		{
			url: '/tours/parasailing-experience-at-calangute-beach-goa',
			title: 'Parasailing in Goas Calangute Beach - Flat 25% Off',
			price: 870
		},
		{
			url: '/tours/parasailing-experience-at-calangute-beach-goa',
			title: 'Parasailing in Goas Calangute Beach - Flat 25% Off',
			price: 870
		}
	]
}

export default CustomCard;