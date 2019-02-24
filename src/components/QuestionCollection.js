import React from 'react';

const QuestionCollection = function(props) {
	var questionList = []
	for(var i = 0; i < props.data.length; i++){
		questionList.push(
			<li key={"faq"+i}>
				<div className="collapsible-header active">
					{props.data[i].question} 
					<span className="pull-right">
						<i className="fa accordion-icon"></i>
					</span>
				</div>
				<p>
					{props.data[i].answer}
				</p>
			</li>
		)
	}
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
						{questionList}	
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

QuestionCollection.defaultProps = {
	data: [
		{
			question: "Q. Drinking Laws",
			answer: "According to the drinking laws of the Union Territory of Goa, the legal drinking age to consume alcohol is 18 years."
		},
		{
			question: "Q. Drinking Laws",
			answer: "According to the drinking laws of the Union Territory of Goa, the legal drinking age to consume alcohol is 18 years."
		},
		{
			question: "Q. Drinking Laws",
			answer: "According to the drinking laws of the Union Territory of Goa, the legal drinking age to consume alcohol is 18 years."
		},
		{
			question: "Q. Drinking Laws",
			answer: "According to the drinking laws of the Union Territory of Goa, the legal drinking age to consume alcohol is 18 years."
		},
		{
			question: "Q. Drinking Laws",
			answer: "According to the drinking laws of the Union Territory of Goa, the legal drinking age to consume alcohol is 18 years."
		}
	]
}

export default QuestionCollection;
