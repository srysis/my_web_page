import React from "react"

import search_icon from "../files/magnifying-glass-solid.svg"

function Aside( {visibility, toggleVisibilityFunction} ) {

	function onClickHandler() {
		toggleVisibilityFunction();
	}

	return (
		<aside className={visibility ? "visible" : "hidden"} >
			<div className="overlay" onClick={onClickHandler} ></div>
			<div id="aside_content" className={visibility ? "visible" : "hidden"} >
				<input type="search" name="search" id="search_field" placeholder="Search on website" />
				<button id="search_button"><img src={search_icon} /></button>
				<button id="login">LOG IN</button>
				<ul>
					<li><a href="#">HOME</a></li>
					<li><a href="#">ABOUT</a></li>
					<li><a href="#">TAKE ACTION</a></li>
					<li><a href="#">CORONA</a></li>
					<li><a href="#">NEWS</a></li>
					<li><a href="#">DOCTORS</a></li>
					<li><a href="#">CONTACT</a></li>
				</ul>
			</div>
		</aside>
	)
}

export default Aside;
