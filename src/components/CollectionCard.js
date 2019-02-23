import React, { Component } from 'react';

class CollectionCard extends Component {
  render() {
    return (
			<div className="card">
				<a href={this.props.url}>
					<div className="card-image">
						<img className="img-responsive" src={this.props.src} alt={this.props.alt}/>
					</div>
				</a>
				<div className="row name-listings">
					<div className="col-md-12 col-sm-12">
						<p className="tours-name">{this.props.name}</p>
					</div>
					<div className="col-md-12 col-sm-12">
						<p>{this.props.count} Listings</p>
					</div>
				</div>
			</div>					
	  );
  }
}

export default CollectionCard;