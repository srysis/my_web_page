import { useTranslation } from "react-i18next"

function MinorSkills() {
	const { t } = useTranslation();

	return (
		<div id="minor_skills">
			<h2>{t('minor_skills_title')}</h2>
			<hr />
            <ul>
				<li>Tailwind CSS</li>
				<li>Adobe PhotoShop/Paint.net</li>
				<li>Canva Websites</li>
                <li>Apache 2.4</li>
				<li>Blender</li>
			</ul>
		</div>
	)
}

export default MinorSkills;