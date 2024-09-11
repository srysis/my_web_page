import React from "react"

import Header from "./components/Header"
import Aside from "./components/Aside"
import Main from "./components/Main"
import Footer from "./components/Footer"

import AsideTogglerButton from "./components/AsideTogglerButton"

function AppRoot() {
	const [visible, setVisibility] = React.useState(false);

	function setAsideVisibility() {
		setVisibility(!visible);
	}

	return (
		<>
			<AsideTogglerButton toggleVisibilityFunction={setAsideVisibility} />
			<Header />
			<Aside toggleVisibilityFunction={setAsideVisibility} visibility={visible} />
			<Main />
			<Footer />
		</>
	)
}

export default AppRoot;
