import React from 'react';
import CollectionCard from './cards/CollectionCard';

const Handpicked = function(props) {  
	var handpickedList = []
	for(var i = 0; i < props.data.length; i++){
		handpickedList.push(
			<div className="col-md-3 handpicked-collections-div-no-padding" key={"handpicked"+i}>
				<CollectionCard 
					src={props.data[i].src}
					alt={props.data[i].alt}
					name={props.data[i].name}
					count={props.data[i].count}
					url={props.data[i].url}
				/>							
			</div>
		)
	}
	return (
		<section className="handpicked-collections">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-8 col-md-8 col-sm-8">
						<p className="recommendation-text section-heading">Traveller Tales from Goa</p>
					</div>
				</div>
				<div className="row">
					{handpickedList}
				</div>
			</div>
		</section>
	);
}

Handpicked.defaultProps = {
	data: [{
		src: "https://images.thrillophilia.com/image/upload/s--tfS0GLse--/c_fill,f_auto,fl_strip_profile,h_450,q_auto,w_450/v1/collections/images/014/606/687/original/1545654369_shutterstock_531407305.jpg.jpg?1545654368",
		alt: "Collection Image",
		name: "New Year Parties In Goa, 2019 - Early Bird Offers",
		count: "1",
		url: "/collections/new-year-parties-in-goa-2019-early-bird-offers"
	}]
}

export default Handpicked;
