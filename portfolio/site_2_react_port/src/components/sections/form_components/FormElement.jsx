import React from "react"

import FormValidator from "./FormValidator"

function FormElement( {elementName, elementPlaceholder, onBlurHandler, onClickHandler, isCurrentlyEmpty, elementErrorMessage } ) {
	return (
		<>
			<input 
				name={elementName}
				placeholder={elementPlaceholder}
				onBlur={onBlurHandler} 
				onClick={onClickHandler}
			/>
			{ isCurrentlyEmpty && <FormValidator ID={"error_tooltip"} text={elementErrorMessage} /> }
		</>
	)
}

export default FormElement