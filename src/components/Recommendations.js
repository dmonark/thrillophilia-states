import React from 'react';
import ProductCard from './ProductCard';

const Recommendations = function(props) {
	var recommendationsList = []
	
	for(var i = 0; i < props.data.length; i++) {
		recommendationsList.push(		
			<div className="col-md-3 col-sm-4 col-xs-6">
				<ProductCard />
			</div>
		)		
	}
	
	return (
		<div id="description" className="container-fluid cards hidden-xs">
			<div className="row">
				<div className="col-xs-8 col-sm-8 col-md-6">
					<p className="pull-left recommendation-text">
						<span className="highlighted-text">Thrillophilia</span> Recommendations for Goa
					</p>
				</div>
			</div>
			<div className="row hidden-sm cards mt0">
			{recommendationsList}
			</div>
		</div>
	);  
}

Recommendations.defaultProps = {
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

export default Recommendations;
