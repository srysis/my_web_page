import React from "react"

import map from "../files/footer/map.png"

class Footer extends React.Component {
	render() {
	    return (
	        <footer>
				<div className="flex_container">
					<div id="resources">
						<h3>RESOURCES</h3>
						<p><a href="#">What we do</a></p>
						<p><a href="#">Media</a></p>
						<p><a href="#">Travel Advice</a></p>
						<p><a href="#">Protection</a></p>
						<p><a href="#">Care</a></p>
					</div>
					<div id="about">
						<h3>ABOUT</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus neque, viverra in venenatis nec, pretium nec lorem. Curabitur ac interdum libero. Nunc dapibus ut neque id fermentum. Donec pretium tellus id velit consequat, non efficitur tortor convallis. Morbi ultricies massa ut pharetra volutpat. Sed ultricies dignissim neque. Sed eleifend sollicitudin velit.</p>
					</div>
					<div id="contacts">
						<h3>CONTACT US</h3>
						<ul>
							<li>Your address</li>
							<li>Your phone number</li>
							<li>Your email</li>
						</ul>
					</div>
					<div id="countries">
						<h3>COUNTRIES</h3>
						<img src={map} alt="Map" />
					</div>
				</div>
			</footer>
	    )
	}
}

export default Footer;