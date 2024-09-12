import React from "react"

import logo from "../files/logo.png"

const Header = () => {
	return (
		<header>
			<div className="overlay"></div>
			<div className="logo">
				<img src={logo} alt="logo" />
				<div>DART</div>
				<div id="logo_text"><strong>SERVICE MANAGER</strong></div>
			</div>
			<nav>
				<a href="#">Home</a>
				<a href="#">Service</a>
				<a href="#">Extension</a>
				<a href="#">Pricing</a>
				<a href="#">Help</a>
			</nav>
			<button id="sign_up_button">Sign up</button>
			<div className="flex_container">
				<div id="first_flex">
					<h1>LOREM IPSUM DOLOR SIT AMET</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut aliquip ex ea commodo consequat.</p>
					<div className="flex_container">
						<button id="buy_button">BUY NOW</button>
						<button id="trial_button">TRY FOR FREE</button>
					</div>
				</div>
				<div id="second_flex">
					<div className="overlay"></div>
					<div id="video_overlay"></div>
				</div>
			</div>
		</header>
	)
}

export default Header