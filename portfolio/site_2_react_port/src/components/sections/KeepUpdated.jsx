import React from "react"

import KeepUpdatedForm from "./form_components/KeepUpdatedForm"

function KeepUpdated() {
	const [isSent, toggleSentState] = React.useState(false);
	const [canBeSent, toggleSendingOption] = React.useState(false);

	const sendButton = <button type='button' onClick={onClickHandler} >SUBSCRIBE NOW</button>;

	function setCurrentFormState(formState) {
		toggleSendingOption(formState);
	}

	function onClickHandler() {
		if (canBeSent) {
			toggleSentState(true);
		} else {
			alert("The form cannot be submitted!")
		}
	}

    return (
        <section id="keep_updated">
			<h2>GET EVERY UPDATE...</h2>
			<div id="form_container">
				{ !isSent && <KeepUpdatedForm sendButton={sendButton} setFormStateFunction={setCurrentFormState} /> }
				{ isSent && 
					<div id="subscription_success">
						<h3>YOU HAVE SUBSCRIBED TO THE NEWSLETTER</h3>
					</div>
				}
			</div>
		</section>
    )
}

export default KeepUpdated;