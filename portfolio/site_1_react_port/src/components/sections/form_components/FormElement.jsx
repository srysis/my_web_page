import React from "react"

import ErrorTooltip from "./ErrorTooltip"

function FormElement( {elementName, elementPlaceholder, elementPosition } ) {
	const [isFieldEmpty, toggleFieldEmptiness] = React.useState(false); // false is by default as it is needed for error signs to not be displayed right at the start

	const [errorMessage, setErrorMessage] = React.useState("");

	// function that checks if given string only contains numbers
	function isDigit(char) {
	    return char >= '0' && char <= '9';
	}

	function onFormElementBlurHandler(event) {
		if (event.target.value === "") {
			toggleFieldEmptiness(true);
			setErrorMessage("This field is empty");

		} else if ( (event.target.name === "firstname" || event.target.name === "lastname") && event.target.value.length < 3) {
			toggleFieldEmptiness(true);
			setErrorMessage("Enter a valid name/surname");

		} else if (event.target.name === "email" && !event.target.value.includes('@')) {
			toggleFieldEmptiness(true);
			setErrorMessage("Enter a valid e-mail address");

		} else if (event.target.name === "phone" && !event.target.value.split('').every(isDigit)) {
			toggleFieldEmptiness(true);
			setErrorMessage("Enter a valid phone number");

		} else {
			toggleFieldEmptiness(false);
		}
	}

	function onFormElementClickHandler(event) {
		toggleFieldEmptiness(false);
	}

	return (
		<>
			<input 
				name={elementName}
				placeholder={elementPlaceholder}
				className={isFieldEmpty ? "invalid" : "valid"} 
				onBlur={onFormElementBlurHandler} 
				onClick={onFormElementClickHandler}
			/>
			{ isFieldEmpty && <ErrorTooltip classes={elementPosition === "left" ? "error_tooltip first" : elementPosition === "right" ? "error_tooltip second" : ""} text={errorMessage} /> }
		</>
	)
}

export default FormElement