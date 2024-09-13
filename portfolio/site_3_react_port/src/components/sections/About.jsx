import React from "react"

import about_image from "../../files/main/about_image.png"

const About = () => {
	return(
		<section id="about">
			<h2>ABOUT <span>US</span></h2>
			<img src={about_image} />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id pharetra mi. Nunc commodo mauris eros, a sagittis nibh fringilla eget. 
				Integer nec massa maximus, mollis sem at, iaculis sapien. Sed imperdiet sagittis ante eu blandit. Praesent dapibus eros consectetur odio scelerisque, sed viverra ligula accumsan. 
				Praesent ipsum dui, placerat et ex nec, condimentum tincidunt purus. Aenean non pretium lectus, in suscipit ipsum. Ut consequat ipsum id dui viverra, ac pretium ligula consequat. 
				Ut eu justo dolor. Pellentesque pharetra, massa et lobortis mollis, mi libero eleifend orci, ut pellentesque purus nunc vitae nisi. 
				Nullam nec mi placerat, lacinia ex non, imperdiet neque. Praesent molestie ac libero eu finibus.
			</p>
			<button>READ MORE</button>
		</section>
	)
}

export default About;