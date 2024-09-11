import React from "react"

import doctor_1 from "../../files/doctors/1.png"
import doctor_2 from "../../files/doctors/2.png"

class Doctors extends React.Component {
	render() {
	    return (
	        <section id="doctors">
				<h2>WHAT DOCTORS SAY...</h2>
				<div className="flex_container">
					<div className="doctor">
						<div className="content">
							<div className="image_container">
								<img src={doctor_1} alt=""/>
							</div>
							<div className="text_container">
								<h3>DR. GOLAP DEN</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus neque, viverra in venenatis nec, pretium nec lorem. Curabitur ac interdum libero. Nunc dapibus ut neque id fermentum. Donec pretium tellus id velit consequat, non efficitur tortor convallis. Morbi ultricies massa ut pharetra volutpat. Sed ultricies dignissim neque. Sed eleifend sollicitudin velit.
								</p>
							</div>
						</div>
					</div>
					<div className="doctor">
						<div className="content">
							<div className="image_container">
								<img src={doctor_2} alt="" />
							</div>
							<div className="text_container">
								<h3>DR. GOLAP DEN</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus neque, viverra in venenatis nec, pretium nec lorem. Curabitur ac interdum libero. Nunc dapibus ut neque id fermentum. Donec pretium tellus id velit consequat, non efficitur tortor convallis. Morbi ultricies massa ut pharetra volutpat. Sed ultricies dignissim neque. Sed eleifend sollicitudin velit.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
	    )
	}
}

export default Doctors;