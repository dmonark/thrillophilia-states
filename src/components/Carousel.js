import React from 'react';
import ProductCard from './cards/ProductCard';

const CarouselActive = function(props) {
	var carouselSubList = []
	for(var i = 0; i < props.data.length; i++){
		carouselSubList.push(
			<div key={props.keyText + i} className="col-md-3 col-sm-4 col-xs-6">
				<ProductCard keyText={props.keyText + i} />
			</div>
		)
	}
	return carouselSubList
}

const Carousel = function(props) {
  var carouselList = [];
	
	for(var i = 0; i < props.data.length; i++){
		carouselList.push(
			<div key={props.keyText+i} className={i === 0 ? "item active": "item"} >
				<CarouselActive keyText={props.keyText + i} data={props.data[i]} />
			</div>
		)
	}
	
	return (
		<div className="container-fluid cards hidden-xs">
			<div className="row hidden-sm cards mt0">
				<div className="col-md-12 mb10">
					<p className="pull-left carousel-title">
					{props.title}						
					</p>
				</div>
				<div id={props.carouselName} className="carousel slide" data-interval="false" data-ride="carousel">
					<div className="carousel-inner">
					{carouselList}
					</div>
					<a className="carousel-control left corousel-indicator" data-slide="prev" href={"#"+props.carouselName} style={{backgroundImage: 'none', left: '-90px'}}>
						<span>
							<i className="fa fa-angle-left indicator-icon" aria-hidden="true"></i>
						</span>
					</a>
					<a className="carousel-control right corousel-indicator" data-slide="next" href={"#"+props.carouselName} style={{backgroundImage: 'none', right: '-90px'}}>
						<span>
							<i className="fa fa-angle-right indicator-icon" aria-hidden="true"></i>
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}

Carousel.defaultProps = {
	data: [
		[
			{},
			{},
			{},
			{}
		],
		[
			{},
			{},
			{}
		]
	]
}

export default Carousel;
