import { useTranslation } from "react-i18next"

function MajorSkills() {
	const { t } = useTranslation();

	return (
		<div id="major_skills">
			<h2>{t('major_skills_title')}</h2>
			<hr />
			<ul>
				<li>HTML, CSS</li>
				<li>JavaScript/TypeScript</li>
				<li>React.js</li>
				<li>Node.js, Express, JWT</li>
				<li>MySQL</li>
				<li>Postman</li>
				<li>GitHub</li>
			</ul>
		</div>
	)
}

export default MajorSkills;