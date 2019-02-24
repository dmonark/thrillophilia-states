import React, { Component } from 'react';
import CollectionCard from './cards/CollectionCard';

class CollectionCarousel extends Component {
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
								<div className="col-md-2 col-sm-3 col-lg-2 col-xs-12 nearby-destination-div-no-padding">
									<CollectionCard 
										src="https://images.thrillophilia.com/image/upload/s---uXQ3MQ_--/c_fill,f_auto,fl_strip_profile,h_225,q_auto,w_300/v1/images/photos/000/078/639/original/1463255744_Screen_Shot_2016-05-15_at_1.25.28_AM.png.jpg?1463255744"
										alt="Collection Image"
										name="North Goa"
										count="213"
										url="/cities/north-goa"
									/>
								</div>
								<div className="col-md-2 col-sm-3 col-lg-2 col-xs-12 nearby-destination-div-no-padding">
									<CollectionCard 
										src="https://images.thrillophilia.com/image/upload/s---uXQ3MQ_--/c_fill,f_auto,fl_strip_profile,h_225,q_auto,w_300/v1/images/photos/000/078/639/original/1463255744_Screen_Shot_2016-05-15_at_1.25.28_AM.png.jpg?1463255744"
										alt="Collection Image"
										name="North Goa"
										count="213"
										url="/cities/north-goa"
									/>
								</div>
								<div className="col-md-2 col-sm-3 col-lg-2 col-xs-12 nearby-destination-div-no-padding">
									<CollectionCard 
										src="https://images.thrillophilia.com/image/upload/s---uXQ3MQ_--/c_fill,f_auto,fl_strip_profile,h_225,q_auto,w_300/v1/images/photos/000/078/639/original/1463255744_Screen_Shot_2016-05-15_at_1.25.28_AM.png.jpg?1463255744"
										alt="Collection Image"
										name="North Goa"
										count="213"
										url="/cities/north-goa"
									/>
								</div>
								<div className="col-md-2 col-sm-3 col-lg-2 col-xs-12 nearby-destination-div-no-padding">
									<CollectionCard 
										src="https://images.thrillophilia.com/image/upload/s---uXQ3MQ_--/c_fill,f_auto,fl_strip_profile,h_225,q_auto,w_300/v1/images/photos/000/078/639/original/1463255744_Screen_Shot_2016-05-15_at_1.25.28_AM.png.jpg?1463255744"
										alt="Collection Image"
										name="North Goa"
										count="213"
										url="/cities/north-goa"
									/>
								</div>
								<div className="col-md-2 col-sm-3 col-lg-2 col-xs-12 nearby-destination-div-no-padding">
									<CollectionCard 
										src="https://images.thrillophilia.com/image/upload/s---uXQ3MQ_--/c_fill,f_auto,fl_strip_profile,h_225,q_auto,w_300/v1/images/photos/000/078/639/original/1463255744_Screen_Shot_2016-05-15_at_1.25.28_AM.png.jpg?1463255744"
										alt="Collection Image"
										name="North Goa"
										count="213"
										url="/cities/north-goa"
									/>
								</div>
								<div className="col-md-2 col-sm-3 col-lg-2 col-xs-12 nearby-destination-div-no-padding">
									<CollectionCard 
										src="https://images.thrillophilia.com/image/upload/s---uXQ3MQ_--/c_fill,f_auto,fl_strip_profile,h_225,q_auto,w_300/v1/images/photos/000/078/639/original/1463255744_Screen_Shot_2016-05-15_at_1.25.28_AM.png.jpg?1463255744"
										alt="Collection Image"
										name="North Goa"
										count="213"
										url="/cities/north-goa"
									/>
								</div>
							</div>
							<div className="item">
								<div className="col-md-2 col-sm-3 col-lg-2 col-xs-12 nearby-destination-div-no-padding">
									<CollectionCard 
										src="https://images.thrillophilia.com/image/upload/s---uXQ3MQ_--/c_fill,f_auto,fl_strip_profile,h_225,q_auto,w_300/v1/images/photos/000/078/639/original/1463255744_Screen_Shot_2016-05-15_at_1.25.28_AM.png.jpg?1463255744"
										alt="Collection Image"
										name="North Goa"
										count="213"
										url="/cities/north-goa"
									/>
								</div>
								<div className="col-md-2 col-sm-3 col-lg-2 col-xs-12 nearby-destination-div-no-padding">
									<CollectionCard 
										src="https://images.thrillophilia.com/image/upload/s---uXQ3MQ_--/c_fill,f_auto,fl_strip_profile,h_225,q_auto,w_300/v1/images/photos/000/078/639/original/1463255744_Screen_Shot_2016-05-15_at_1.25.28_AM.png.jpg?1463255744"
										alt="Collection Image"
										name="North Goa"
										count="213"
										url="/cities/north-goa"
									/>
								</div>
							</div>
						</div>
						<a className="carousel-control left nearby-corousel-indicator" data-slide="prev" href={"#"+this.props.carouselName} style={{backgroundImage: 'none', left: '-90px'}}>
							<span>
								<i className="fa fa-angle-left indicator-icon" aria-hidden="true"></i>
							</span>
						</a>
						<a className="carousel-control right nearby-corousel-indicator" data-slide="next" href={"#"+this.props.carouselName} style={{backgroundImage: 'none', right: '-90px'}}>
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

export default CollectionCarousel;
