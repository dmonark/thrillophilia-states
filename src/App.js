import React, { Component } from 'react';
import ArticleDesc from './components/ArticleDesc';
import Recommendations from './components/Recommendations';
import Carousel from './components/Carousel';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="new-destination-page-body">
					<ArticleDesc />
					<Recommendations />
					<Carousel title="Things to do in Goa"/>
					<Carousel title="Goa Tours"/>
					<Carousel title="Rentals in Goa"/>
					<Carousel title="Best Places to Stay in Goa"/>
					<Carousel title="Events in Goa"/>
					<section className="attraction-section">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-8 col-md-8 col-sm-8">
								<p className="recommendation-text section-heading">Attractions</p>
							</div>
							<div className="col-md-4 col-xs-4 col-sm-4">
								<a id="attractions-btn" className="pull-right" href="/destinations/goa/places-to-visit"> Show All</a>
							</div>
						</div>
						<div className="row">
							<div className="col-md-3 col-xs-6">
								<div className="card large">
									<a href="/attractions/calangute-beach">
										<div className="card-image">
											<img className="img-responsive" src="https://images.thrillophilia.com/image/upload/s--FyBvmuaZ--/c_fill,f_auto,fl_strip_profile,h_380,q_auto,w_604/v1/attractions/images/000/002/641/original/1503404123_19640571470_9dfeddc423_b.jpg.jpg?1503404123" />
										</div>
									</a>
									<div className="card-content large-content">
										<p className="tours-name">
											<a href="/attractions/calangute-beach">Calangute Beach</a>
										</p>
										<span>
											Deserving every reason to be called the ‘Queen of Beaches’ in Goa, Calangute Beach is a paradise for nature lovers holding the spectacular b...
										</span>
									</div>
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
							</div>
						</div>
					</div>
					</section>
				</div>
      </div>
    );
  }
}

export default App;
