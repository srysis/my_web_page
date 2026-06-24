import { useTranslation } from "react-i18next"

function Intro( ) {
	const { t } = useTranslation();

	return (
		<section id="intro">
			<div>
				<h1>Denys '<em>srysis</em>' Yarymovych</h1>
				<hr />
				<p>{t('short_desc')}</p>
			</div>
		</section>
	) 
}

export default Intro