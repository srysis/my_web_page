import React from "react"

import image_1 from "../../files/main/feedback/1.png"
import image_2 from "../../files/main/feedback/2.png"

class Feedback extends React.Component {
	render() {
		return(
			<section id="feedback">
				<h2>WHAT SAYS <span>COUPLE</span></h2>
				<div className="flex_container">
					<div className="couple first">
						<img src={image_1} />
						<h3>Steve and Linda</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel malesuada nisl, sit amet malesuada nisi. 
							Cras nisl neque, varius vel iaculis ac, tincidunt a turpis. Proin cursus justo tincidunt libero pharetra, suscipit semper massa pellentesque. 
							Sed quis lorem pretium, dictum orci vitae, fringilla mi.
						</p>
					</div>
					<div className="couple second">
						<img src={image_2} />
						<h3>Eric and Wendy</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel malesuada nisl, sit amet malesuada nisi. 
							Cras nisl neque, varius vel iaculis ac, tincidunt a turpis. Proin cursus justo tincidunt libero pharetra, suscipit semper massa pellentesque. 
							Sed quis lorem pretium, dictum orci vitae, fringilla mi.
						</p>
					</div>
				</div>
			</section>
		)
	};
}

export default Feedback;