import React, { Component } from 'react';


class QuestionCollection extends Component {
  render() {
    return (
			<section className="faq-section">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12 col-xs-12">
							<p className="recommendation-text section-heading">
								What You Should Know More About Goa
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12">
							<ul className="collapsible">
								<li>
									<div className="collapsible-header active">
										Q. Drinking Laws 
										<span className="pull-right">
											<i className="fa accordion-icon"></i>
										</span>
									</div>
									<p>
										According to the drinking laws of the Union Territory of Goa, the legal drinking age to consume alcohol is 18 years.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
	  );
  }
}

export default QuestionCollection;
