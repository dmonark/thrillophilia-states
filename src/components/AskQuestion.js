import React, { Component } from 'react';

class AskQuestion extends Component {
  constructor(props) {
		super(props);

		this.state = {
			que: ""
		};
	}
	
	render() {
		return (
			<div id="ask-question" className="user-question" >
				<div className="container-fluid">
					<div className="row">
						<p className="recommendation-text pull-left" style={{fontSize: "18px", paddingLeft: "10px;"}}>Ask a Question</p>
					</div>
					<div className="row enquiry_now" style={{padding:"20px", paddingLeft:"10px"}}>
						<form accept-charset="UTF-8" action="/create_snippet_question" className="simple_form new_ugc_snippet_question" data-remote="true" data-validate="true" id="new_ugc_snippet_question" method="post" novalidate="novalidate">
							<div className="details">
								<div className="control-group text required ugc_snippet_question_title">
									<div className="controls">
										<textarea className="text required" cols="40" id="ugc_snippet_question_title" name="ugc_snippet_question[title]" placeholder="Please write your question here" required="required" rows="20" data-validate="true"></textarea>
									</div>
								</div>
							</div>
							<div className="bottom">
								<div className="right">
									<input className="btn_green js-publish-review" data-target="#loginModal" data-toggle="modal" id="loginButton" name="commit" type="submit" value="Submit Question" />
								</div>
							</div>
						</form>
					</div>		
				</div>
			</div>
	  );
  }
}

export default AskQuestion;
