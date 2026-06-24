import { useTranslation } from "react-i18next";
import { supportedLngs } from "../tools/i18n.js";

// import "../style/locale_switcher.css"
import "../style/locale_switcher.css"

function LocaleSwitcher() {
	const { i18n } = useTranslation();

	return (
		<div className="locale_switcher">
			<select
				id="lang_switch"
				value={i18n.resolvedLanguage}
				onChange={(e) => { i18n.changeLanguage(e.target.value).then(() => {window.localStorage.setItem("lang", e.target.value)});  } }
			>
				{Object.entries(supportedLngs).map((key) => (
					<option value={key[0]} key={key[0]}>
						{key[1]}
					</option>
				))}
			</select>
		</div>
	);
}

export default LocaleSwitcher;