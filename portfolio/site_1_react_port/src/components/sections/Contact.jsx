import React from "react"

import ContactForm from "./form_components/ContactForm"

function Contact() {
	const [isSent, toggleSentState] = React.useState(false);

	const sendButton = <button type='button' onClick={onClickHandler} >SEND</button>;

	function onClickHandler() {
		// Since all form elements are considered not empty at first, 
		// we force a second check on all items to see if there is an empty element and if there is, a message will be shown
		// and a form will not be submitted.
		// Such mechanism was implemented to prevent user from sending an empty form right at the start.

		let items = document.querySelectorAll("input");
		for (let item of items) {
			if (item.value === "") { 
				alert("Form cannot be submitted!");
				return;
			}
		}

		// If there are no empty items, form is considered to be valid for sending.
		toggleSentState(true);

	}

	return (
		<section id="contact_form">
			<div className="title">
				<h1>Contact Us</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
			</div>
			{ !isSent && <ContactForm sendButton={sendButton} /> }
			{ isSent && 
				<div id="contact_success">
					<h2>Thank you!</h2>
					<h3>Our employees will reach out to you as soon as possible.</h3>
				</div>
			}
		</section>
	)
}

export default Contact