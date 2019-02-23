import React, { Component } from 'react';
import CustomCard from './CustomCard';

class Attractions extends Component {
  render() {
    return (
			<section className="attraction-section">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-8 col-md-8 col-sm-8">
							<p className="recommendation-text section-heading">Attractions</p>
						</div>
						<div className="col-md-4 col-xs-4 col-sm-4">
							<a className="pull-right show-all-btn" href="/destinations/goa/places-to-visit"> Show All</a>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3 col-xs-6">
							<CustomCard cardType="large"/>							
						</div>
						<div className="col-md-3 col-xs-6">
							<CustomCard cardType="large"/>							
						</div>
						<div className="col-md-3 col-xs-6">
							<CustomCard cardType="large"/>							
						</div>
						<div className="col-md-3 col-xs-6">
							<CustomCard cardType="large"/>
						</div>
					</div>
				</div>
			</section>
	  );
  }
}

export default Attractions;
