import React, { Component } from 'react';

class AskQuestion extends Component {
  constructor(props) {
		super(props);

		this.state = {
			que: ""
		};
		
		this.handleOnChange = this.handleOnChange.bind(this);
	}
	
	handleOnChange(event) {
    this.setState({
      que: event.target.value
    })
  }
	
	handleSubmit(event) {
    event.preventDefault();
		alert('Req sent');
  }

	render() {
		return (
			<div id="ask-question" className="user-question" >
				<div className="container-fluid">
					<div className="row">
						<p className="recommendation-text pull-left" style={{fontSize: '18px', paddingLeft: '10px'}}>Ask a Question</p>
					</div>
					<div className="row enquiry_now" style={{padding:'20px', paddingLeft:'10px'}}>
						<form className="simple_form new_ugc_snippet_question" id="new_ugc_snippet_question">
							<div className="details">
								<div className="control-group text required ugc_snippet_question_title">
									<div className="controls">
										<textarea className="text required" cols="40" id="ugc_snippet_question_title" placeholder="Please write your question here" rows="20" value={this.state.que} onChange={(event) => this.handleOnChange(event)}></textarea>
									</div>
								</div>
							</div>
							<div className="bottom">
								<div className="right">
									<input className="btn_green js-publish-review" id="loginButton" type="submit" value="Submit Question" onClick={(event) => this.handleSubmit(event)} />
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
