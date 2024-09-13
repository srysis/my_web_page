import React from "react"

class HappyCoupleDesktop extends React.Component {
	render() {
		return(
			<section className="happy_couple desktop">
				<h2>HAPPY <span>COUPLE</span></h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id pharetra mi. Nunc commodo mauris eros, a sagittis nibh fringilla eget.</p>
				<div className="flex_container">
					<div id="first_image_block">
						<div className="image_1">
							<div className="overlay">
								<div className="text_overlay">
									<h3>JONY AND JOLILI</h3>
									<hr />
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet lacus elit. Vestibulum iaculis lacus id malesuada mattis.</p>
									<button>READ MORE</button>
								</div>
							</div>
						</div>
					</div>
					<div id="second_image_block">
						<div className="image_1">
							<div className="overlay">
								<div className="second text_overlay">
									<h3>JONY AND JOLILI</h3>
									<hr />
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet lacus elit. Vestibulum iaculis lacus id malesuada mattis.</p>
									<button>READ MORE</button>
								</div>
							</div>
						</div>
						<div className="image_2">
							<div className="overlay">
								<div className="second text_overlay">
									<h3>JONY AND JOLILI</h3>
									<hr />
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet lacus elit. Vestibulum iaculis lacus id malesuada mattis.</p>
									<button>READ MORE</button>
								</div>
							</div>
						</div>
					</div>
					<div id="third_image_block">
						<div className="image_1">
							<div className="overlay">
								<div className="text_overlay">
									<h3>JONY AND JOLILI</h3>
									<hr />
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet lacus elit. Vestibulum iaculis lacus id malesuada mattis.</p>
									<button>READ MORE</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button>SEE MORE</button>
			</section>
		)
	};
}

export default HappyCoupleDesktop;