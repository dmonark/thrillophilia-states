import React, { Component } from 'react';

class QuestionAnswer extends Component{
	constructor(props) {
		super(props);

		this.state = {
			show: false
		};
	}
	
	render() {
		return (
			<li className={this.state.show ? null : "active"} onClick={() => this.setState(prevState => ({show: !prevState.show}))}>
				<div className={this.state.show ? "collapsible-header" : "collapsible-header active"}>
					{this.props.data.question} 
					<span className="pull-right">
						<i className="fa accordion-icon"></i>
					</span>
				</div>
				{
					this.state.show ? (
						<p>
							{this.props.data.answer}
						</p>
					) : null
				}
			</li>
		)
	}
}

const QuestionCollection = function(props) {
	var questionList = []
	for(var i = 0; i < props.data.length; i++){
		questionList.push(
			<QuestionAnswer 
				key={"faq"+i}
				data={props.data[i]}
			/>
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
