import React from "react"

import ListElement from "./sections_list/ListElement"

const Services = () => {
	const [active, setActive] = React.useState(false);

	return (
		<section id="services">
			<div className="title">
				<h1>Services</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
			</div>
			<ListElement list_element_title_text="STATISTICS" />
			<ListElement list_element_title_text="INBOX" />
			<ListElement list_element_title_text="TEAM" />
			<ListElement list_element_title_text="SETTINGS" />
			<ListElement list_element_title_text="FEED" />
		</section>
	)
}

export default Services