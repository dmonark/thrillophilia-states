import React, { Component } from 'react';
import HeaderCarousel from './components/HeaderCarousel';
import BreadCrumbs from './components/BreadCrumbs';
import BrandReviews from './components/BrandReviews';
import ArticleDesc from './components/ArticleDesc';
import Recommendations from './components/Recommendations';
import Carousel from './components/Carousel';
import Attractions from './components/Attractions';
import AskQuestion from './components/AskQuestion';
import Guides from './components/Guides';
import Reviews from './components/Reviews';
import Handpicked from './components/Handpicked';
import CollectionCarousel from './components/CollectionCarousel';
import TagCollection from './components/TagCollection';
import QuestionCollection from './components/QuestionCollection';
import Footer from './components/Footer';

class App extends Component {
  render() {
		return (
      <div className="App">
        <div className="new-destination-page-body">
					<HeaderCarousel />
					<BrandReviews />
					<BreadCrumbs />
					<ArticleDesc />
					<Recommendations keyText="rec"/>
					<Carousel title="Things to do in Goa" carouselName="carousel-things" show="4" keyText="things"/>
					<Carousel title="Goa Tours" carouselName="carousel-tours" show="4" keyText="tours"/>
					<Carousel title="Rentals in Goa" carouselName="carousel-rentals" show="4" keyText="rentals"/>
					<Carousel title="Best Places to Stay in Goa" carouselName="carousel-places" show="4" keyText="stay"/>
					<Carousel title="Events in Goa" carouselName="carousel-events" show="4" keyText="events"/>
					<Attractions />
					<AskQuestion />
					<Guides />
					<Reviews />
					<Handpicked />
					<div className="nearby-section">
						<CollectionCarousel title="Nearby Getaways from Goa" carouselName="carousel-nearby-destinations"/>
						<CollectionCarousel title="Goa Experiences" carouselName="carousel-sub-categories"/>
					</div>
					<TagCollection title="More Things to do in Goa" keyText = "more"/>
					<TagCollection title="Top Goa Attractions" keyText="topattraction"/>
					<TagCollection title="Most Popular Places Around Goa" keyText="popular"/>
					<TagCollection title="Listings in Goa" keyText="listings"/>
					<QuestionCollection />
				</div>
				<Footer />
      </div>
    );
  }
}

export default App;