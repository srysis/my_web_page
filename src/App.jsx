import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

import { disableReactDevTools } from '@fvilers/disable-react-devtools'

import Home from "./pages/home"

import "./style/style.css"
import "./style/style-phone.css"

function App() {
	if (process.env.NODE_ENV === "production") {
		disableReactDevTools();
	}

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
