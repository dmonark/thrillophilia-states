import React, { Component } from 'react';
import Slider from "react-slick";

class HeaderCarousel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			slideIndex: 0,
			updateCount: 0
		};
	}
	render() {
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
		return (
			<div className="container-fluid slider-container hidden-xs">
				<div className="carousel slide new-destination-page-slider hidden-xs" data-interval="5000" data-pause="false" data-ride="carousel" id="banner-slider">
					<ol className="carousel-indicators">
						<li className={this.state.slideIndex === 0 ? "active" : null} data-target="#banner-slider" onClick={() => this.slider.slickGoTo(0)}>
							<span className="carousel-inner-image-1"></span>
							Home
							<a href="#" className="clearfix listings"></a>
						</li>
						<li className={this.state.slideIndex === 1 ? "active" : null}>
							<a className="indicator-target" href="/states/goa/things-to-do" target="_blank" onClick={() => this.slider.slickGoTo(1)}>
								<span className="carousel-inner-image-2"></span>
								<p className="clearfix listings">341 Things To Do In Goa</p>
							</a>
						</li>
						<li className={this.state.slideIndex === 2 ? "active" : null}>
							<a className="indicator-target" href="/states/goa/tours" target="_blank" onClick={() => this.slider.slickGoTo(2)}>
								<span className="carousel-inner-image-3"></span>
								<p className="clearfix listings">61 Goa Tour Packages</p>
							</a>
						</li>
						<li className={this.state.slideIndex === 3 ? "active" : null}>
							<a className="indicator-target" href="/states/goa/rentals" target="_blank" onClick={() => this.slider.slickGoTo(3)}>
								<span className="carousel-inner-image-4"></span>
								<p className="clearfix listings">45 Rentals</p>
							</a>
						</li>
						<li className={this.state.slideIndex === 4 ? "active" : null}>
							<a className="indicator-target" href="/states/goa/stays" target="_blank" onClick={() => this.slider.slickGoTo(4)}>
								<span className="carousel-inner-image-5"></span>
								<p className="clearfix listings">41 Places To Stay In Goa</p>
							</a>
						</li>
						<li className={this.state.slideIndex === 5 ? "active" : null}>
							<a className="indicator-target" href="/states/goa/events" target="_blank" onClick={() => this.slider.slickGoTo(5)}>
								<span className="carousel-inner-image-6"></span>
								<p className="clearfix listings">6 Events</p>
							</a>
						</li>
					</ol>
					<div className="carousel-inner" role="listbox">
						<Slider ref={slider => (this.slider = slider)} {...settings}>
						<div className="item">
							<img alt="1463253572_screen_shot_2016-05-15_at_12.49.42_am.png" className="img-responsive" src="https://images.thrillophilia.com/image/upload/s--9u8Lheje--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/013/598/original/1463253572_Screen_Shot_2016-05-15_at_12.49.42_AM.png.jpg?1463253572" />
							
						</div>
						<div className="item">
							<img alt="Banner" className="img-responsive" src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-things-to-do-a273c8e6efb958ca72e3c439a991f2eb.jpg" />
							
						</div>
						<div className="item">
							<img alt="Banner" className="img-responsive" src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-tours-ef50aa6ecfaf707fcc3ac0b73f418209.jpg" />
							
						</div>
						<div className="item">
							<img alt="Banner" className="img-responsive" src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-rentals-43baf9229d62dae9e3a8e7110e39485a.jpg" />
							
						</div>
						<div className="item">
							<img alt="Banner" className="img-responsive" src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-stays-e8568d04a2f8b218be5065e2ae708ffd.jpg" />
							
						</div>
						<div className="item">
								<img alt="Banner" className="img-responsive" src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-events-262b169f47085a1e090c92369a3565a3.jpg" />
								
						</div>
						<div className="item">
								<img alt="Banner" className="img-responsive" src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-attractions-94bb1192b36f4ec0fccce53a5457fb78.jpg" />
								
						</div>
						</Slider>
					</div>
					<a className="left carousel-control" data-slide="prev" href="#banner-slider" role="button" onClick={() => this.slider.slickGoTo(this.state.slideIndex - 1)}></a>
					<a className="right carousel-control" data-slide="next" href="#banner-slider" role="button" onClick={() => this.slider.slickGoTo(this.state.slideIndex + 1)}></a>
				</div>
			</div>
		);
	}
}

export default HeaderCarousel;