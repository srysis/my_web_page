import React from "react"

function InteractableImage({ id, source, isActive, onToggle }) {
	return ( 
		<img 
			id={id}
			src={source}
			className={isActive ? "active" : "inactive"}
			onClick={onToggle}
		/> 
	)
}


export default InteractableImage;