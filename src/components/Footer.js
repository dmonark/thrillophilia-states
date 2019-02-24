import React from 'react';

const Footer = function(props) {
	return (
		<div id="footer">
			<div className="third_block">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-xs-4 first">
							<div className="logo responsive_box">
								<img className="responsive_box_image cld-responsive" alt="Footer" src="https://images.thrillophilia.com/image/upload/s--ida79HK5--/dpr_1.0,w_300/v1/custom_images/photos/000/000/007/original/1508821727_new_logo_thrillophilia_update.png.png?1508821727" data-width="300" />
								Thrillophilia.com
							</div>
							<ul className="firstcoloum">
								<li><a href="/about-us">About us</a></li>
								<li><a href="/reviews">Thrillophilia Reviews </a></li>
								<li><a href="/terms-and-conditions">Terms and Conditions</a></li>
								<li><a href="/privacy-policy">Privacy Policy</a></li>
								<li><a href="/copyright-policies">Copyright Policies</a></li>
								<li><a href="https://thrillophilia.freshdesk.com/support/home" target="_blank" rel="noopener noreferrer">Support</a></li>
								<li><a href="/apps">Apps</a></li>
								<li><a href="/careers" className="medium-orange" target="_blank" rel="noopener noreferrer">We are Hiring</a></li>
								<li><a href="/go-to-gift-page" className="medium-orange" target="_blank" rel="noopener noreferrer">Gift an Experience</a></li>
							</ul>
							<ul className="secondcoloum">
								<li>
									<p className="footer_title_name">Recent Blog Posts</p>
									<ul>
										<li><a href="http://www.thrillophilia.com/blog/20-places-you-need-to-visit-in-india-with-your-best-friend/" target="_blank" rel="noopener noreferrer">20 Places You Need To Visit In India With Your Best Friend</a></li>
										<li><a href="http://www.thrillophilia.com/blog/best-honeymoon-destinations-in-india/" target="_blank" rel="noopener noreferrer">50 Best Honeymoon Destinations In India</a></li>
										<li><a href="http://www.thrillophilia.com/blog/international-budget-trips-2015/" target="_blank" rel="noopener noreferrer">25 Kickass International Trips Under 50k To Plan For 2015</a></li>
										<li><a href="http://www.thrillophilia.com/blog/50-places-to-visit-in-india-before-you-turn-30/" target="_blank"rel="noopener noreferrer">52 Places To Visit In India Before You Turn 30</a></li>
										<li><a href="http://www.thrillophilia.com/blog/countries-where-getting-a-visa-is-easy-for-indians/" target="_blank" rel="noopener noreferrer">50 Countries Where Getting A Visa Is Easier Than Ordering A Pizza</a></li>
									</ul>
								</li>
							</ul>
							<ul className="thirdcoloum">
								<li><a href="/gopro" className="medium-orange" data-no-turbolink="true" target="_blank">GoPro Passport Program</a></li>
								<br /> 
								<p className="footer_title_name">Suppliers</p>
								<li><a href="/suppliers" className="medium-orange" data-no-turbolink="true" target="_blank">List Your Activities</a></li>
								<li><a href="/advertise_with_us" className="medium-orange" target="_blank">Advertise with us</a></li>
								<br />
								<p className="footer_title_name">Travel Agents</p>
								<li><a href="/platform_leads/new?lead_type=agent_lead" className="medium-orange" target="_blank">Signup as Agent</a></li>
								<li><a href="/agents/sign_in" className="medium-orange" target="_blank">Agent Login</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="footer_bottom">
				<p>©  2019 &nbsp;<a href="/">Thrillophilia.com</a> All rights reserved</p>
			</div>
		</div>
	);
}

export default Footer;
