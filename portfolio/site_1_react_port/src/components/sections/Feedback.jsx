import React from "react"

import user_1 from "../../files/feedback/1.png"
import user_2 from "../../files/feedback/2.png"

class Feedback extends React.Component {
	render() {
		return (
			<section id="feedback">
				<div className="overlay"></div>
				<div className="flex_container">
					<div id="title_and_button">
						<h2>What our customers have to say about us.</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
						<button>GET STARTED</button>
					</div>
					<div id="users">
						<div className="user">
							<img src={user_1} />
							<div className="user_comment">
								<h2>John</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
							</div>
						</div>
						<div className="user">
							<img src={user_2} />
							<div className="user_comment">
								<h2>Khalessi</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	};
}

export default Feedback