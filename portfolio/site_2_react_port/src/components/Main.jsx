import React from "react"

import AboutCorona from "./sections/AboutCorona"
import Symptoms from "./sections/Symptoms"
import Protection from "./sections/Protection"
import Cases from "./sections/Cases"
import Doctors from "./sections/Doctors"
import KeepUpdated from "./sections/KeepUpdated"

class Main extends React.Component {
	render() {
	    return (
	        <main>
	        	<AboutCorona />
	        	<Symptoms />
	        	<Protection />
	        	<Cases />
	        	<Doctors />
	        	<KeepUpdated />
	        </main>
	    )
	}
}

export default Main;