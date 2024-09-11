import React from "react"

import symptoms_image from "../../files/symptoms.png"

class Symptoms extends React.Component {
	render() {
	    return (
	        <section id="symptoms">
				<div className="flex_container">
					<div className="image">
						<img src={symptoms_image} alt="Symptoms" />
					</div>
					<div className="text_and_button">
						<h2>CORONAVIRUS WHAT IS IT?</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat mauris vitae posuere faucibus. Ut mattis varius quam vitae mattis. Suspendisse ac egestas lectus, ut faucibus risus. Integer posuere pharetra gravida. Sed enim nulla, eleifend eu odio eget, egestas dignissim leo.</p>
						<br />
						<button className="more blue">READ MORE</button>
					</div>
				</div>
			</section>
	    )
	}
}

export default Symptoms;