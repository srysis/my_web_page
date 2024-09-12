import React from "react"

import logo from "../files/logo.png"
import twitter from "../files/footer/twitter.png"
import facebook from "../files/footer/facebook.png"
import linkedin from "../files/footer/linkedin.png"

class Footer extends React.Component {
	render() {
		return(
		<footer>
			<div className="flex_container">
				<div className="logo">
					<img src={logo} />
					<div>DART</div>
					<div style={{ width: '250px' }}><strong>SERVICE MANAGER</strong></div>
				</div>
				<nav>
					<a href="#">Home</a>
					<a href="#">Service</a>
					<a href="#">Extension</a>
					<a href="#">Pricing</a>
					<a href="#">Help</a>
				</nav>
			</div>
			<div className="flex_container" style={{ marginTop: '5px'}}>
				<ul>
					<li>
						<a href="#">Privacy Policy</a>
					</li>
					<li>
						<a href="#">About Us</a>
					</li>
				</ul>
				<div id="company_socials">
					<a href="#"><img src={twitter} /></a>
					<a href="#"><img src={facebook} /></a>
					<a href="#"><img src={linkedin} /></a>
				</div>
			</div>
		</footer>
		);
	}
}

export default Footer