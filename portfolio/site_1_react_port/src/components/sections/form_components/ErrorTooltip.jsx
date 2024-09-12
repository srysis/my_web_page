import React from "react"

function ErrorTooltip( {classes, text} ) {

	return (
		<span className={classes} >
			{text}
		</span>
	)
}

export default ErrorTooltip