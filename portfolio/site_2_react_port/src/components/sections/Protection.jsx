import React from "react"

import mask_image from "../../files/protection/sick.png"
import wash_hands_image from "../../files/protection/hand-wash.png"
import home_image from "../../files/protection/real-estate.png"

class Protection extends React.Component {
	render() {
	    return (
	        <section id="protection">
				<div id="protection_title">
					<h2>HOW TO PROTECT YOURSELF</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat mauris vitae posuere faucibus.</p>
				</div>
				<div id="protection_methods">
					<div className="overlay"></div>
					<div className="flex_container">
						<div id="mask">
							<div className="content">
								<div className="flex_container">
									<div className="image_container">
										<img src={mask_image} alt="Wear a mask" />
									</div>
									<div className="text_container">
										<h3>Wear a Mask</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget luctus turpis. Aenean dignissim, tortor sed dapibus varius, turpis augue facilisis libero, vitae feugiat est enim quis magna. Aliquam et euismod quam.</p>
										<button className="more blue">READ MORE</button>
									</div>
								</div>
							</div>
							<br />
							<button className="more blue">READ MORE</button>
						</div>
						<div id="wash_hands">
							<div className="content">
								<div className="flex_container">
									<div className="image_container">
										<img src={wash_hands_image} alt="Wash hands"/>
									</div>
									<div className="text_container">
										<h3>Wash Your Hands</h3>
										<p>Curabitur egestas lectus a mauris suscipit mattis. Fusce nisi nisl, molestie ut elit a, elementum blandit ex. Pellentesque et orci urna. Ut aliquam sed lorem ut posuere. Integer luctus nisl sed justo scelerisque, sed eleifend turpis suscipit.</p>
										<button className="more red">READ MORE</button>
									</div>
								</div>
							</div>
							<br />
							<button className="more red">READ MORE</button>
						</div>
						<div id="home">
							<div className="content">
								<div className="flex_container">
									<div className="image_container">
										<img src={home_image} alt="Stay at home" />
									</div>
									<div className="text_container">
										<h3>Stay at Home</h3>
										<p>Mauris suscipit libero erat. Nullam in erat pellentesque, accumsan sem quis, vestibulum nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer interdum eu lorem id finibus. Nunc a mauris ex.</p>
										<button className="more blue">READ MORE</button>
									</div>
								</div>
							</div>
							<br />
							<button className="more blue">READ MORE</button>
						</div>
					</div>
				</div>
		</section>
	    )
	}
}

export default Protection;