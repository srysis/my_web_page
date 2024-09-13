import React from "react"

import FormElement from "./FormElement"

function ContactForm( { sendButton } ) {
	return (
		<form>
			<div className="input_container">
				<FormElement elementName="firstname" elementPlaceholder="First name*" />
			</div>
			<div className="input_container">
				<FormElement elementName="lastname" elementPlaceholder="Last name*" />
			</div>
			<div className="input_container">
				<FormElement elementName="email" elementPlaceholder="Email*" />
			</div>
			<div className="input_container">
				<FormElement elementName="phone" elementPlaceholder="Phone*" />
			</div>
			<div>
				{sendButton}
			</div>
		</form>
	)
}

export default ContactForm