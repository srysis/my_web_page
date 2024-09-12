import React from "react"

import InteractableImage from "../InteractableImage";

import dev_1 from "../../files/team/1.png"
import dev_2 from "../../files/team/2.png"
import dev_3 from "../../files/team/3.png"

import twitter from "../../files/team/twitter.png"
import facebook from "../../files/team/facebook.png"
import linkedin from "../../files/team/linkedin.png"

function Team() {
	const [activeElement, setActiveElement] = React.useState(1);

	return(
		<section id="team">
			<div className="title">
				<h1>Our Team</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
			<div id="team_members">

				<InteractableImage 
					id="first" 
					source={dev_1} 
					isActive={activeElement === 0} 
					onToggle={() => setActiveElement(0)} 
				/>

				<InteractableImage 
					id="second" 
					source={dev_2} 
					isActive={activeElement === 1} 
					onToggle={() => setActiveElement(1)} 
				/>

				<InteractableImage 
					id="third" 
					source={dev_3} 
					isActive={activeElement === 2} 
					onToggle={() => setActiveElement(2)} 
				/>

			</div>
			<div id="team_member_bio">
				<h2>{ activeElement === 0 ? "Amy Wong" 
					: activeElement === 1 ? "Sophie Turner" 
					: activeElement === 2 ? "Adam Jensen" 
					: "temp" } 
				</h2>
				<p>
					{ activeElement === 0 ? 
						"Nunc posuere euismod blandit. Nullam aliquet ipsum pellentesque nulla placerat mollis. Duis sit amet imperdiet orci. Sed vehicula urna quis nulla maximus, laoreet ultrices sapien consectetur." 
					: activeElement === 1 ? 
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit, neque non pulvinar ullamcorper, felis tortor sagittis ex, dictum venenatis dui leo id dui." 
					: activeElement === 2 ? 
						"Duis lacinia at risus sed cursus. Suspendisse potenti. Mauris in orci id erat tempor scelerisque. Donec blandit est id lectus mollis, ac blandit sapien sagittis. In sit amet tempor diam. Etiam sodales congue sapien, non suscipit lacus consequat vitae." 
					: "temp" } 
				</p>
			</div>
			<div id="team_member_socials">
				<a href="#"><img src={twitter} /></a>
				<a href="#"><img src={facebook} /></a>
				<a href="#"><img src={linkedin} /></a>
			</div>
		</section>
	)
}

export default Team