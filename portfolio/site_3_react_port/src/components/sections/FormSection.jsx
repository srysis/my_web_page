import React from "react"

import Form from "./form_components/Form"

import map_image from "../../files/main/form/map.png"

function FormSection() {
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

	return(
		<section id="form_section">
			<h2>ARE YOU <span>ATTENDING?</span></h2>
			<div className="container">
				{ !isSent &&
					<div id="form_container">
						<Form sendButton={sendButton} />
					</div>
				}
				{ isSent && 
					<div id="contact_success">
						<h2>Thank you!</h2>
						<h3>Our employees will reach out to you as soon as possible.</h3>
					</div>
				}
				<div id="form_image_container">
					<div></div>
				</div>
			</div>
			<img src={map_image} />
		</section>
	)
}

export default FormSection;