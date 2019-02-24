import React from 'react';
import CustomCard from './CustomCard';

const Guides = function(props) {
  var guideList = []
	for(var i = 0; i < props.data.length; i++){
		guideList.push(
			<div className="col-md-3 col-xs-6">
				<CustomCard cardType="medium"/>
			</div>
		)
	}
	return (
		<section className="attraction-section">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-8 col-md-8 col-sm-8">
						<p className="recommendation-text section-heading">Travel Guides for Goa</p>
					</div>
				</div>
				<div className="row">
					{guideList}
				</div>
			</div>
		</section>
	);
}

Guides.defaultProps = {
	data: [
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{}
	]
}

export default Guides;
