import React, { Component } from 'react';
import ArticleDesc from './components/ArticleDesc';
import Recommendations from './components/Recommendations';
import Carousel from './components/Carousel';
import Attractions from './components/Attractions'
import Guides from './components/Guides'
import Reviews from './components/Reviews'
import Handpicked from './components/Handpicked'
import CollectionCarousel from './components/CollectionCarousel'
import TagCollection from './components/TagCollection'
import QuestionCollection from './components/QuestionCollection'
class App extends Component {
  render() {
    const tags = [{url: '/hello', name: 'Hello'}]
		return (
      <div className="App">
        <div className="new-destination-page-body">
					<ArticleDesc />
					<Recommendations />
					<Carousel title="Things to do in Goa" carouselName="carousel-things"/>
					<Carousel title="Goa Tours" carouselName="carousel-tours"/>
					<Carousel title="Rentals in Goa" carouselName="carousel-rentals"/>
					<Carousel title="Best Places to Stay in Goa" carouselName="carousel-places"/>
					<Carousel title="Events in Goa" carouselName="carousel-events"/>
					<Attractions />
					<Guides />
					<Reviews />
					<Handpicked />
					<div className="nearby-section">
						<CollectionCarousel title="Nearby Getaways from Goa" carouselName="carousel-nearby-destinations"/>
						<CollectionCarousel title="Goa Experiences" carouselName="carousel-sub-categories"/>
					</div>
					<TagCollection title="More Things to do in Goa" tags={tags}/>
					<TagCollection title="Top Goa Attractions"  tags={tags}/>
					<TagCollection title="Most Popular Places Around Goa"  tags={tags}/>
					<TagCollection title="Listings in Goa" tags={tags}/>
					<QuestionCollection />
				</div>
      </div>
    );
  }
}

export default App;
