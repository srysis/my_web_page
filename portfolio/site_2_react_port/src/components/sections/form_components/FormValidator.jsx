import React from "react"

function FormValidator( {ID, text} ) {

	return (
		<span id={ID} >
			{text}
		</span>
	)
}

export default FormValidator