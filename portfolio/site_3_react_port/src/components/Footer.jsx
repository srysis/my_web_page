import React from "react"

import logo from "../files/logo.png"

class Footer extends React.Component {
	render() {
		return(
			<footer>
				<img src={logo} />
				<h2>CONTACT US</h2>
				<ul>
					<li><p>Location</p></li>
					<li><p>Phone number</p></li>
					<li><p>Email address</p></li>
				</ul>
			</footer>
		)
	};
}

export default Footer;