import React from 'react';

const BrandReviews = function(props) {
	return (
		<div className="container-fluid user-review-section hidden-xs">
			<div className="row">
				<div className="col-md-12 col-sm-12 col-xs-12">
					<div className="jumbotron">
						<div className="row">
							<div className="col-md-4 col-md-offset-1 col-sm-4">
								<p>User Reviews</p>
								<p className="header-review-count clearfix">
									&nbsp;1250 Reviews
								</p>
							</div>
							<div className="col-md-7 col-sm-7">
								<ul className="brand-logos pull-right clearfix">
									<p className="trusted-brand">Top Trusted Travel Brand</p>
									<li className="adventure-travel"></li>
									<li className="cnbc"></li>
									<li className="cnn"></li>
									<li className="forbes"></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
					
	);
}

export default BrandReviews;