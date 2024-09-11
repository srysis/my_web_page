import React from "react"

import corona_image from "../../files/corona.png"

class AboutCorona extends React.Component {
	render() {
	    return (
	        <section id="about_corona">
				<div className="flex_container">
					<div className="text_and_button">
						<h3>About Corona Virus</h3>
						<hr />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat mauris vitae posuere faucibus. 
							Ut mattis varius quam vitae mattis. Suspendisse ac egestas lectus, ut faucibus risus. 
							Integer posuere pharetra gravida. Sed enim nulla, eleifend eu odio eget, egestas dignissim leo. 
							Quisque efficitur eros sit amet pulvinar fermentum. Proin pharetra ex ac feugiat rutrum. 
							Nam vestibulum dui id sem sodales, at egestas orci efficitur. 
							Proin semper urna a libero volutpat porttitor. 
							Suspendisse sed vulputate mi. Fusce nunc massa, lacinia sit amet elit non, dapibus lacinia sem. 
							Integer et tellus dictum urna rhoncus tincidunt nec sed leo. Duis turpis lacus, fermentum eget varius et, pretium et arcu.
						</p>
						<br />
						<button className="more blue" style={{ padding: '2% 10%' }}>READ MORE</button>
					</div>
					<div className="image">
						<img src={corona_image} alt="" />
					</div>
				</div>
			</section>
	    )
	}
}

export default AboutCorona;