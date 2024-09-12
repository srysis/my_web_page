import React from "react"

import image1 from "../../files/counters/building.png"
import image2 from "../../files/counters/download_free.png"
import image3 from "../../files/counters/person.png"
import image4 from "../../files/counters/download_pro.png"

class Counters extends React.Component {
	render() {
		return (
			<section id="counters">
				<div className="flex_container">
					<div id="business">
						<div className="counter_content">
							<img src={image1} alt="icon" />
							<div>12000+</div>
							<div>Business</div>
						</div>
					</div>
					<div id="downloads">
						<div className="counter_content">
							<img src={image2} alt="icon" />
							<div>60000+</div>
							<div>Downloads</div>
						</div>
					</div>
					<div id="free">
						<div className="counter_content">
							<img src={image3} alt="icon" />
							<div>30000+</div>
							<div>Free Installs</div>
						</div>
					</div>
					<div id="pro">
						<div className="counter_content">
							<img src={image4} alt="icon" />
							<div>40000+</div>
							<div>Pro Users</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Counters