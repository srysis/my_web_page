import React from "react"

import EasyAndUseful from "./sections/EasyAndUseful"
import Counters from "./sections/Counters"
import Services from "./sections/Services"
import Feedback from "./sections/Feedback"
import Team from "./sections/Team"
import Contact from "./sections/Contact"

class Main extends React.Component {
	render() {
		return (
			<main>
				<EasyAndUseful />
				<Counters />
				<Services />
				<Feedback />
				<Team />
				<Contact />
			</main>
		);
	}
}

export default Main