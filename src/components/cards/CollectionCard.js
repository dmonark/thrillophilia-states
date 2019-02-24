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

export default CollectionCard;