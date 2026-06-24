import { useTranslation } from "react-i18next"

function AboutMe() {
	const { t } = useTranslation();

	return (
		<div id="about_me">
			<h2>{t('short_info.title')}</h2>
			<hr />
			<ul>
				<li>{t('short_info.name_surname.title')}: {t('short_info.name_surname.content')}</li>
				<li>{t('short_info.nickname_title')}: srysis</li>
				<li>{t('short_info.age_title')}: 24</li>
				<li>{t('short_info.nationality.title')}: {t('short_info.nationality.content')}</li>
				<li>{t('short_info.education.title')}: {t('short_info.education.content')}</li>
			</ul>
		</div>
	)
}

export default AboutMe;