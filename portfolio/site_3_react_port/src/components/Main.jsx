import React from "react"

import About from "./sections/About"
import HappyCoupleDesktop from "./sections/HappyCoupleDesktop"
import HappyCouplePhone from "./sections/HappyCouplePhone"
import Story from "./sections/Story"
import FormSection from "./sections/FormSection"
import Feedback from "./sections/Feedback"


const Main = () => {
	return(
		<main>
			<div className="section_seperator">
				<p>♦</p>
			</div>
			<About />
			<div className="section_seperator">
				<p>♦</p>
			</div>
			<HappyCoupleDesktop />
			<HappyCouplePhone />
			<div className="section_seperator">
				<p>♦</p>
			</div>
			<Story />
			<FormSection />
			<div className="section_seperator">
				<p>♦</p>
			</div>
			<Feedback />
		</main>
	)
}

export default Main;