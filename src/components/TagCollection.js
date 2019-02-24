import React from 'react';

const TagCollection = function(props) {
  var tagsList = []
	for(var i = 0; i < props.data.length; i++){
		tagsList.push(
			<li>
				<div className="btn btn-extra-things-to-do">
					<a href={props.data[i].url}>{props.data[i].name}</a>
				</div>
			</li>
		)
	}
	return (
		<section className="more-things">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 col-xs-12">
						<p className="recommendation-text section-heading">
						{props.title}						
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 col-xs-12">
						<ul className="new-destination-page-buttons-bottom">
						{tagsList}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

TagCollection.defaultProps = {
	data:[
		{url: '/hello', name: 'Hello'},
		{url: '/hello', name: 'Hello'},
		{url: '/hello', name: 'Hello'},
		{url: '/hello', name: 'Hello'},
		{url: '/hello', name: 'Hello'},
		{url: '/hello', name: 'Hello'},
		{url: '/hello', name: 'Hello'}
	]
}

export default TagCollection;