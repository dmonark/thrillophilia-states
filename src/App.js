import React, { Component } from 'react';
import ArticleDesc from './components/ArticleDesc';
import Recommendations from './components/Recommendations';
import Carousel from './components/Carousel';
import Attractions from './components/Attractions'
import Guides from './components/Guides'
import Reviews from './components/Reviews'
import Handpicked from './components/Handpicked'
import CollectionCarousel from './components/CollectionCarousel'

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
					<Attractions />
					<Guides />
					<Reviews />
					<Handpicked />
					<div className="nearby-section">
						<CollectionCarousel title="Nearby Getaways from Goa" indicatorHref="#carousel-nearby-destinations"/>
						<CollectionCarousel title="Goa Experiences" indicatorHref="#carousel-sub-categories"/>
					</div>
				</div>
      </div>
    );
  }
}

export default App;
