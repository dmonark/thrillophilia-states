import React from 'react';

const CollectionCard = function(props) {
  return (
		<div className="card">
			<a href={props.url}>
				<div className="card-image">
					<img className="img-responsive" src={props.src} alt={props.alt}/>
				</div>
			</a>
			<div className="row name-listings">
				<div className="col-md-12 col-sm-12">
					<p className="tours-name">{props.name}</p>
				</div>
				<div className="col-md-12 col-sm-12">
					<p>{props.count} Listings</p>
				</div>
			</div>
		</div>					
	);
}

CollectionCard.defaultProps = {
	src: "https://images.thrillophilia.com/image/upload/s---uXQ3MQ_--/c_fill,f_auto,fl_strip_profile,h_225,q_auto,w_300/v1/images/photos/000/078/639/original/1463255744_Screen_Shot_2016-05-15_at_1.25.28_AM.png.jpg?1463255744",
	alt: "Collection Image",
	name: "North Goa",
	count: "213",
	url: "/cities/north-goa"
}

export default CollectionCard;