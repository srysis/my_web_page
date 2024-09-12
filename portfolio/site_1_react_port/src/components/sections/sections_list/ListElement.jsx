import React from "react"

import temp_image from "../../../files/main/title_image.png"

const ListElement = (props) => {
	const [active, setActive] = React.useState(false);

	return (
		<div className={active ? "list_element active" : "list_element"} onClick={() => setActive(!active)}>
			<div className="list_element_title">
				<p>{props.list_element_title_text}</p>
				<p>↓</p>
			</div>
			<div className="list_element_content">
				<img src={temp_image} alt="Sample image" />
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
			</div>
		</div>
	)
}

export default ListElement