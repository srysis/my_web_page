import React from "react"
import { StrictMode } from "react"
import ReactDOM from 'react-dom/client';

import AppRoot from "./AppRoot.jsx"

import './style/style.css';
import './style/style-phone.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<AppRoot />
	</StrictMode>
);