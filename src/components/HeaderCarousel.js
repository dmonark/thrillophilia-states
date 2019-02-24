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
						<li className="" data-slide-to="0" data-target="#banner-slider">
							<span className="carousel-inner-image-1"></span>
							Home
							<a href="#" className="clearfix listings"></a>
						</li>
						<li className="">
							<a className="indicator-target" href="/states/goa/things-to-do" target="_blank">
								<span className="carousel-inner-image-2"></span>
								<p className="clearfix listings">341 Things To Do In Goa</p>
							</a>
						</li>
						<li className="">
							<a className="indicator-target" href="/states/goa/tours" target="_blank">
								<span className="carousel-inner-image-3"></span>
								<p className="clearfix listings">61 Goa Tour Packages</p>
							</a>
						</li>
						<li className="">
							<a className="indicator-target" href="/states/goa/rentals" target="_blank">
								<span className="carousel-inner-image-4"></span>
								<p className="clearfix listings">45 Rentals</p>
							</a>
						</li>
						<li className="active">
							<a className="indicator-target" href="/states/goa/stays" target="_blank">
								<span className="carousel-inner-image-5"></span>
								<p className="clearfix listings">41 Places To Stay In Goa</p>
							</a>
						</li>
						<li className="">
							<a className="indicator-target" href="/states/goa/events" target="_blank">
								<span className="carousel-inner-image-6"></span>
								<p className="clearfix listings">6 Events</p>
							</a>
						</li>
					</ol>
					<div className="carousel-inner" role="listbox">
						<Slider ref={slider => (this.slider = slider)} {...settings}>
						<div className="item">
							<img alt="1463253572_screen_shot_2016-05-15_at_12.49.42_am.png" className="img-responsive" src="https://images.thrillophilia.com/image/upload/s--9u8Lheje--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/013/598/original/1463253572_Screen_Shot_2016-05-15_at_12.49.42_AM.png.jpg?1463253572" />
							<div className="carousel-caption destination-banner-title">
								<h1>Goa</h1>
								<h4>Experiential journeys will make you a storyteller</h4>
							</div>
						</div>
						<div className="item">
							<a href="/states/goa/things-to-do" target="_blank">
								<img alt="Banner" className="img-responsive" src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-things-to-do-a273c8e6efb958ca72e3c439a991f2eb.jpg" />
							</a>
							<div className="carousel-caption">
								<a href="/states/goa/things-to-do" target="_blank">
									<h2>Thrillophilia Activities</h2>
									<h4>Find best things to do and experience more!</h4>
								</a>
								<a className="btn btn-show-more btn-default" href="/states/goa/things-to-do" target="_blank">See All Activities</a>
							</div>
						</div>
						<div className="item">
							<a href="/states/goa/tours" target="_blank">
								<img alt="Banner" className="img-responsive" src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-tours-ef50aa6ecfaf707fcc3ac0b73f418209.jpg" />
							</a>
							<div className="carousel-caption">
								<a href="/states/goa/tours" target="_blank">
									<h2>Thrillophilia Tours</h2>
									<h4>Experiential journeys will make you a storyteller</h4>
								</a>
								<a className="btn btn-show-more btn-default" href="/states/goa/tours" target="_blank">Show Tours</a>
							</div>
						</div>
						<div className="item">
								<a href="/states/goa/rentals" target="_blank">
									<img alt="Banner" className="img-responsive" src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-rentals-43baf9229d62dae9e3a8e7110e39485a.jpg" />
								</a>
								<div className="carousel-caption">
									<a href="/states/goa/rentals" target="_blank">
										<h2>Thrillophilia Rentals</h2>
										<h4>Add local flavor to your  journey, rent out bikes, cameras, gears and more!</h4>
									</a>
									<a className="btn btn-show-more btn-default" href="/states/goa/rentals" target="_blank">Book Rentals</a>
								</div>
						</div>
						<div className="item active">
								<a href="/states/goa/stays" target="_blank">
									<img alt="Banner" className="img-responsive" src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-stays-e8568d04a2f8b218be5065e2ae708ffd.jpg" />
								</a>
								<div className="carousel-caption">
									<a href="/states/goa/stays" target="_blank">
										<h2>Thrillophilia Staycations</h2>
										<h4>Our handpicked most experiential stays in Goa</h4>
									</a>
									<a className="btn btn-show-more btn-default" href="/states/goa/stays" target="_blank">Explore Staycations</a>
								</div>
						</div>
						<div className="item">
								<a href="/states/goa/events" target="_blank">
									<img alt="Banner" className="img-responsive" src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-events-262b169f47085a1e090c92369a3565a3.jpg" />
								</a>
								<div className="carousel-caption">
									<a href="/states/goa/events" target="_blank">
										<h2>Thrillophilia Events</h2>
										<h4>Whats Happening Now?</h4>
									</a>
									<a className="btn btn-show-more btn-default" href="/states/goa/events" target="_blank">Explore Events</a>
								</div>
						</div>
						<div className="item">
								<a href="/destinations/goa/places-to-visit" target="_blank">
									<img alt="Banner" className="img-responsive" src="https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-attractions-94bb1192b36f4ec0fccce53a5457fb78.jpg" />
								</a>
								<div className="carousel-caption">
									<a href="/destinations/goa/places-to-visit" target="_blank">
										<h2>Best Attractions of Goa</h2>
										<h4>Do not forget to check out our handpicked list of attractions in Goa</h4>
									</a>
									<a className="btn btn-show-more btn-default" href="/destinations/goa/places-to-visit" target="_blank">What to see?</a>
								</div>
						</div>
						</Slider>
					</div>
					<a className="left carousel-control" data-slide="prev" href="#banner-slider" role="button" onClick={() => this.slider.slickGoTo(this.state.updateCount - 1)}></a>
					<a className="right carousel-control" data-slide="next" href="#banner-slider" role="button" onClick={() => this.slider.slickGoTo(this.state.updateCount + 1)}></a>
				</div>
			</div>
		);
	}
}

export default HeaderCarousel;