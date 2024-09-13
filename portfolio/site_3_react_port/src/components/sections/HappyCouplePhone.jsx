import React from "react"

import image_1 from "../../files/main/happy_couple/1.png"
import image_2 from "../../files/main/happy_couple/2.png"
import image_3 from "../../files/main/happy_couple/3.png"
import image_4 from "../../files/main/happy_couple/4.png"

function HappyCouplePhone() {
	const [currentPhoto, setCurrentPhoto] = React.useState(1);

	function changePhoto(direction) {
		if (direction === "left") {
			if (currentPhoto - 1 === 0) {
				setCurrentPhoto(4);
			} else {
				setCurrentPhoto(currentPhoto - 1);
			}
		}
		if (direction === "right") {
			if (currentPhoto + 1 === 5) {
				setCurrentPhoto(1);
			} else {
				setCurrentPhoto(currentPhoto + 1);
			}
		}
	}

	return(
		<section className="happy_couple phone">
			<h2>HAPPY <span>COUPLE</span></h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id pharetra mi. Nunc commodo mauris eros, a sagittis nibh fringilla eget.</p>
			<div className="flex_container">
				<button id="prev_photo" onClick={() => changePhoto("left")} > &lt; </button>
				<div id="photo_container">
					<img src=
							{currentPhoto === 1 ? image_1 
							: currentPhoto === 2 ? image_2 
							: currentPhoto === 3 ? image_3 
							: currentPhoto === 4 ? image_4 
							: ""} 
					/>
				</div>
				<button id="next_photo" onClick={() => changePhoto("right")} > &gt; </button>
			</div>
		</section>
	)
}

export default HappyCouplePhone;