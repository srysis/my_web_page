import React from "react"

import logo from "../files/logo.png"
import facebook_icon from "../files/header/facebook.png"
import twitter_icon from "../files/header/twitter.png"
import linkedin_icon from "../files/header/linkedin.png"

function Aside( {visibility, toggleVisibilityFunction} ) {

	function onClickHandler() {
		toggleVisibilityFunction();
	}

	return (
		<aside className={visibility ? "visible" : "hidden"} >
			<div className="overlay" onClick={onClickHandler} ></div>
			<div id="aside_content" className={visibility ? "visible" : "hidden"} >
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
					<div id="socials">
						<a href="#"><img src={facebook_icon} /></a>
						<a href="#"><img src={twitter_icon} /></a>
						<a href="#"><img src={linkedin_icon} /></a>
					</div>
				</nav>
			</div>
		</aside>
	)
}

export default Aside;
