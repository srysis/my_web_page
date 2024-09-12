import React from "react"

function Aside( {visibility, toggleVisibilityFunction} ) {

	function onClickHandler() {
		toggleVisibilityFunction();
	}

	return (
		<aside className={visibility ? "visible" : "hidden"} >
			<div className="overlay" onClick={onClickHandler} ></div>
			<div id="aside_content" className={visibility ? "visible" : "hidden"} >
				<button id="sign_up_button">Sign up</button>
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Service</a></li>
					<li><a href="#">Extension</a></li>
					<li><a href="#">Pricing</a></li>
					<li><a href="#">Help</a></li>
				</ul>
			</div>
		</aside>
	)
}

export default Aside;
