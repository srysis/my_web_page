import React from "react"

import Header from "./components/Header"
import Aside from "./components/Aside"
import Main from "./components/Main"
import Footer from "./components/Footer"

import AsideTogglerButton from "./components/AsideTogglerButton"

import cross_icon from "./files/cross.svg"

function AppRoot() {
	const [visible, setVisibility] = React.useState(false);
	const [showInfo, setShowInfo] = React.useState(false);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setShowInfo(true);
		}, 1000);
		return () => clearTimeout(timer);
	}, []) 

	function setAsideVisibility() {
		setVisibility(!visible);
	}

	return (
		<>
			{ showInfo &&  
				<div id="info">
					<p>This website is created based on the template, that is available by using <a href="https://html.design/download/covido-coronavirus-psd-template/" >this</a> link.</p>
					<img src={cross_icon} onClick={() => setShowInfo(false)} />
				</div>
			}
			<AsideTogglerButton toggleVisibilityFunction={setAsideVisibility} />
			<Header />
			<Aside toggleVisibilityFunction={setAsideVisibility} visibility={visible} />
			<Main />
			<Footer />
		</>
	)
}

export default AppRoot;
