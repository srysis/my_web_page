import React from "react"

class Story extends React.Component {
	render() {
		return(
			<section id="story">
				<div className="flex_container">
					<div id = "story_content">
						<div className="text_and_button">
							<h2>OUR <span>STORY</span></h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ante vitae sapien dignissim aliquam ac non nibh. Curabitur vel faucibus mauris. 
								Etiam efficitur hendrerit lobortis. Curabitur non congue eros. Nunc efficitur sem erat. Morbi a enim at massa feugiat tempus. 
								Nullam leo tortor, malesuada vel velit in, rhoncus sodales tortor. Ut commodo lobortis neque, nec tincidunt leo cursus ut. 
								Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
								Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sit amet mauris turpis. 
								Pellentesque ullamcorper felis a ultrices ultrices. Pellentesque ac ante lacus.
							</p>
							<button>SEE MORE</button>
						</div>
					</div>
					<div id="story_image_container">
						<div></div>
					</div>
				</div>
			</section>
		)
	};
}

export default Story;