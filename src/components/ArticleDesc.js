import React, { Component } from 'react';

class ArticleDesc extends Component {
  constructor(props) {
		super(props);

		this.state = {
			show: true
		};
		
		this.changeText = this.changeText.bind(this)
	}
	
	changeText(){
		var prevState = this.state.show
		this.setState({
			show: !prevState
		})
	}
	
	render() {
		const styles = {
			height: this.state.show ? "7.5em" : "100%"
		}
    return (
			<div id="description" className="container-fluid cards hidden-xs" >
				<div className="page_description_data desc-class" style={styles}>
					<p>
						Boasting of a quaint mix of western and eastern influences, Goa is a unique holiday destination with an enchanting allure of nature as well as culture The charming landscapes, glittering beaches, verdant hills and mouthwatering food beckons millions of tourists every year for the most exotic adventure in this small state in India. It is not only the best places to rejuvenate yourself but also the fascinating place to have a bunch of memories to last for a lifetime.
					</p>
					<p>
						Often known as the ‘pearl of the east’, Goa has been known across the globe for the warm hospitality, cultural heritage and the endless parties. Whether it is relaxation or adventure, nature or history, shopping or food, or the best places to visit in Goa, it delights all the vacationers with its tangible and intangible allures. Enjoy a spa day to refresh the mind and soul or binge on some spectacular seafood enjoying the view of the sunset. Have a thrilling day by the beach or party all night with the Djs in Goa. 
					</p>				
				</div>
				<a className="btn-overflow less" id="show-more-btn" onClick={() => this.changeText()}>{this.state.show ? "Show More" : "Show Less"}</a>
			</div>
	  );
  }
}

export default ArticleDesc;
