import React, { Component }  from 'react';
import ProductCard from './cards/ProductCard';
import Slider from "react-slick";

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

class Carousel extends Component {
  
	constructor(props) {
		super(props);

		this.state = {
			slideIndex: 0,
			updateCount: 0
		};
	}
	
	render(){
	
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			afterChange: () =>
				this.setState(state => ({ updateCount: state.updateCount + 1 })),
			beforeChange: (current, next) => this.setState({ slideIndex: next })
		};
			
		var carouselList = [];
		
		for(var i = 0; i < this.props.data.length; i++){
			carouselList.push(
				<div key={this.props.keyText+i} className="item" >
					<CarouselActive keyText={this.props.keyText + i} data={this.props.data[i]} />
				</div>
			)
		}
	
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
							<Slider ref={slider => (this.slider = slider)} {...settings}>
								{carouselList}
							</Slider>
						</div>
						<a className="carousel-control left corousel-indicator" style={{backgroundImage: 'none', left: '-90px'}} onClick={() => this.slider.slickGoTo(this.state.updateCount - 1)}>
							<span>
								<i className="fa fa-angle-left indicator-icon" aria-hidden="true"></i>
							</span>
						</a>
						<a className="carousel-control right corousel-indicator" style={{backgroundImage: 'none', right: '-90px'}} onClick={() => this.slider.slickGoTo(this.state.updateCount + 1)}>
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

Carousel.defaultProps = {
	data: [
		[
			{},
			{},
			{},
			{}
		],[
			{},
			{},
			{}
		]
	]
}

export default Carousel;
