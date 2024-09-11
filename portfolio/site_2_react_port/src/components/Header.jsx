import React from "react"

import search_icon from "../files/magnifying-glass-solid.svg"
import user_icon from "../files/user-solid.svg"

function Header() {

    return (
        <header>
			<nav id = "header_nav">
				<div id = "search">
					<img src={search_icon} alt="Search" />
				</div>
				<ul>
					<li><a href="#">HOME</a></li>
					<li><a href="#">ABOUT</a></li>
					<li><a href="#">TAKE ACTION</a></li>
					<li style={{ padding: '1px 3%' }}><a href="#"><strong>CORONA</strong></a></li>
					<li><a href="#">NEWS</a></li>
					<li><a href="#">DOCTORS</a></li>
					<li><a href="#">CONTACT</a></li>
				</ul>
				<div id = "user">
					<img src={user_icon} alt="User" />
				</div>
			</nav>
			<div id = "header_title">
				<h1>Care early</h1>
				<h1>Coronavirus</h1>
				<div className="flex_container" style={{ marginTop: '45px' }}>
					<button className="more red">Read More</button>
					<button id="about_button">About us</button>
				</div>
			</div>
		</header>
    )
}

export default Header;