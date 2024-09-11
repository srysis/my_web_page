import React from "react"

import FormElement from "./FormElement"

function KeepUpdatedForm( { sendButton, setFormStateFunction } ) {
	const [isFieldEmpty, toggleFieldEmptiness] = React.useState(false); // false is by default as it is needed for error signs to not be displayed right at the start
	const [errorMessage, setErrorMessage] = React.useState("");

	function onBlurHandler(event) {
		if (event.target.value === "") {
			toggleFieldEmptiness(true);
			setFormStateFunction(false);

			setErrorMessage("This field is empty");
		} else if (event.target.name === "email" && !event.target.value.includes('@')) {
			toggleFieldEmptiness(true);
			setFormStateFunction(false);

			setErrorMessage("Enter a valid e-mail address");
		} else {
			toggleFieldEmptiness(false);
			setFormStateFunction(true);
		}
	}

	function onClickHandler(event) {
		toggleFieldEmptiness(false);
		setFormStateFunction(true);
	}

	return (
		<form method="post">
			<div id="input_container">
				<FormElement 
					elementName="email" 
					elementPlaceholder="YOUR EMAIL" 
					onBlurHandler={onBlurHandler} 
					onClickHandler={onClickHandler} 
					isCurrentlyEmpty={isFieldEmpty} 
					elementErrorMessage={errorMessage} 
				/>
			</div>
			{sendButton}
		</form>
	)
}

export default KeepUpdatedForm