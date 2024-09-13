import React from "react"

import logo from "../files/logo.png"
import facebook_icon from "../files/header/facebook.png"
import twitter_icon from "../files/header/twitter.png"
import linkedin_icon from "../files/header/linkedin.png"
import search_icon from "../files/search.png"

class Header extends React.Component {
	render() {
		return(
			<header>
				<div className="flex_container">
					<div id="sidebar">
						<div id="logo">
							<img src={logo} />
						</div>
						<nav>
							<ul id="navigation_list">
								<li><a href="#">HOME</a></li>
								<li><a href="#">THE WEDDING</a></li>
								<li><a href="#">WEDDING PLANNER</a></li>
								<li><a href="#">BLOG</a></li>
								<li><a href="#">CONTACT</a></li>
							</ul>
							<hr />
							<p>Phone number</p>
							<p>Email</p>
							<div id="socials">
								<a href="#"><img src={facebook_icon} /></a>
								<a href="#"><img src={twitter_icon} /></a>
								<a href="#"><img src={linkedin_icon} /></a>
							</div>
						</nav>
					</div>
					<div id="header_content_container">
						<div id="content">
							<div className="overlay"></div>
							<div id="login_section">
								<button id="login_button">LOGIN</button>
								<button><img src={search_icon} /></button>
							</div>
							<div className="text_and_button">
								<h1>WEDDING HOUSE</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis sodales venenatis. 
									Vivamus eget eros ac nunc vestibulum rhoncus. Cras tincidunt et est eu dignissim. 
									Nulla vitae nulla fermentum, lobortis dui a, egestas nunc. 
									Nullam semper ullamcorper nunc sed feugiat. Morbi pretium vulputate elementum. 
									Ut vitae sapien fermentum, finibus eros sit amet, congue metus. 
									Integer ex velit, eleifend ac quam sit amet, aliquam elementum ante
								</p>
								<button>CONTACT US</button>
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	};
}

export default Header;