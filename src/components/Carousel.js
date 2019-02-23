import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Carousel extends Component {
  render() {
    return (
			<div className="container-fluid cards hidden-xs">
				<div className="row hidden-sm cards mt0">
					<div className="col-md-12 mb10">
						<p className="pull-left carousel-title">
						{this.props.title}						
						</p>
					</div>
					<div id={this.props.carouselName} className="carousel slide" data-interval="false" data-ride="carousel">
						<div className="carousel-inner">
							<div className="item active">
								<div className="col-md-3 col-sm-4 col-xs-6">
									<ProductCard />
								</div>
								<div className="col-md-3 col-sm-4 col-xs-6">
									<ProductCard />
								</div>
								<div className="col-md-3 col-sm-4 col-xs-6">
									<ProductCard />
								</div>
								<div className="col-md-3 col-sm-4 col-xs-6">
									<ProductCard />
								</div>
							</div>
							<div className="item">
								<div className="col-md-3 col-sm-4 col-xs-6">
									<ProductCard />
								</div>
								<div className="col-md-3 col-sm-4 col-xs-6">
									<ProductCard />
								</div>
								<div className="col-md-3 col-sm-4 col-xs-6">
									<ProductCard />
								</div>
								<div className="col-md-3 col-sm-4 col-xs-6">
									<ProductCard />
								</div>
							</div>
						</div>
						<a className="carousel-control left corousel-indicator" data-slide="prev" href={"#"+this.props.carouselName} style={{backgroundImage: 'none', left: '-90px'}}>
							<span>
								<i className="fa fa-angle-left indicator-icon" aria-hidden="true"></i>
							</span>
						</a>
						<a className="carousel-control right corousel-indicator" data-slide="next" href={"#"+this.props.carouselName} style={{backgroundImage: 'none', right: '-90px'}}>
							<span>
								<i className="fa fa-angle-right indicator-icon" aria-hidden="true"></i>
							</span>
						</a>
					</div>
				</div>
			</div>
	  );
  }
}

export default Carousel;
