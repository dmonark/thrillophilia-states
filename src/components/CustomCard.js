import React, { Component } from 'react';

class CustomCard extends Component {
  render() {
    return (
			<div className={"card "+this.props.cardType}>
				<a href="/attractions/calangute-beach">
					<div className="card-image">
						<img className="img-responsive" src="https://images.thrillophilia.com/image/upload/s--FyBvmuaZ--/c_fill,f_auto,fl_strip_profile,h_380,q_auto,w_604/v1/attractions/images/000/002/641/original/1503404123_19640571470_9dfeddc423_b.jpg.jpg?1503404123" />
					</div>
				</a>
				<div className={"card-content "+this.props.cardType+"-content"}>
					<p className="tours-name">
						<a href="/attractions/calangute-beach">Calangute Beach</a>
					</p>
					<span>
						Deserving every reason to be called the ‘Queen of Beaches’ in Goa, Calangute Beach is a paradise for nature lovers holding the spectacular b...
					</span>
				</div>
				{
					this.props.cardType === "large" ? (
						<div>
						<div className="row">
							<div className="col-md-12">
								<div className="attraction-card">
									<p className="tours-name">
										<a href="/tours/parasailing-experience-at-calangute-beach-goa">Parasailing in Goa's Calangute Beach - Flat 25% Off</a>
									</p>
									<div className="row">
										<div className="col-md-11 attraction-card-btn">
											<p className="price pull-left">
												<i className="fa fa-inr rupee-symbol"></i> 870
											</p>
											<a className="more-info btn-sm pull-right" href="/tours/parasailing-experience-at-calangute-beach-goa">MORE INFO</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card-action">
							<a href="/attractions/calangute-beach">See 2 more tours</a>
						</div>
						</div>
					) : null
				}
				
			</div>					
	  );
  }
}

export default CustomCard;