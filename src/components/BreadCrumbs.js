import React from 'react';

const BreadCrumbs = function(props) {
	return (
		<div className="col-md-12">						
			<ul className="breadcrumbs_wrapper">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/countries/india">India</a>
					</li>
					<li>Goa</li>
			</ul>
		</div>
	);
}

export default BreadCrumbs;