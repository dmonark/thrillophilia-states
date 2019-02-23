import React, { Component } from 'react';
import CustomCard from './CustomCard';

class Guides extends Component {
  render() {
    return (
			<section className="attraction-section">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-8 col-md-8 col-sm-8">
							<p className="recommendation-text section-heading">Travel Guides for Goa</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3 col-xs-6">
							<CustomCard cardType="medium"/>							
						</div>
						<div className="col-md-3 col-xs-6">
							<CustomCard cardType="medium"/>							
						</div>
						<div className="col-md-3 col-xs-6">
							<CustomCard cardType="medium"/>							
						</div>
						<div className="col-md-3 col-xs-6">
							<CustomCard cardType="medium"/>
						</div>
						<div className="col-md-3 col-xs-6">
							<CustomCard cardType="medium"/>
						</div>
						<div className="col-md-3 col-xs-6">
							<CustomCard cardType="medium"/>
						</div>
						<div className="col-md-3 col-xs-6">
							<CustomCard cardType="medium"/>
						</div>
						<div className="col-md-3 col-xs-6">
							<CustomCard cardType="medium"/>
						</div>
					</div>
				</div>
			</section>
	  );
  }
}

export default Guides;
