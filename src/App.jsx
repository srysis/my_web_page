import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

import Home from "./pages/home"

import "./style/style.css"
import "./style/style-phone.css"

function App() {
	const { i18n } = useTranslation();

	useEffect(() => {
		if (!window.localStorage.getItem("lang")) {
			window.localStorage.setItem("lang", i18n.language);
		}
	}, [])

	return (
		<Home />
	);
}

export default App;
