import React, { Component } from 'react';
import CollectionCard from './CollectionCard';

class CollectionCarousel extends Component {
  render() {
    var tagsList = []
		for(var i = 0; i < this.props.tags.length; i++){
			tagsList.push(
				<li>
					<div className="btn btn-extra-things-to-do">
						<a href={this.props.tags[i].url}>{this.props.tags[i].name}</a>
					</div>
				</li>
			)
		}
		return (
			<section className="more-things">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12 col-xs-12">
							<p className="recommendation-text section-heading">
							{this.props.title}						
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 col-xs-12">
							<ul className="new-destination-page-buttons-bottom">
							{tagsList}
							</ul>
						</div>
					</div>
				</div>
			</section>
	  );
  }
}

export default CollectionCarousel;
