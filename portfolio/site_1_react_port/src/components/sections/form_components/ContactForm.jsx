import React from "react"

import FormElement from "./FormElement"

function ContactForm( { sendButton } ) {
	return (
		<form method="post">
			<div>
				<FormElement elementName="firstname" elementPlaceholder="First name*" elementPosition="left" />
				<FormElement elementName="lastname" elementPlaceholder="Last name*" elementPosition="right" />
			</div>
			<div>
				<FormElement elementName="email" elementPlaceholder="Email*" elementPosition="left" />
				<FormElement elementName="phone" elementPlaceholder="Phone*" elementPosition="right" />
			</div>
			<textarea name="message" placeholder="Message(optional)"></textarea>
			<div>
				<div>
					<input type="checkbox" name="newsletter" id="newsletter" />
					<label htmlFor="newsletter">Subscribe to the newsletter</label>
				</div>
				{sendButton}
			</div>
		</form>
	)
}

export default ContactForm