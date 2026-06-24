import { useTranslation } from "react-i18next"

import github_icon from "../files/github-mark-white.svg"

function Footer() {
	const { t } = useTranslation();

	return (
		<footer>
			<div className="flex_container">
				<div className="left">
					<div>
						<img src={github_icon} /><span><a href="https://github.com/srysis/my_web_page_react" target="_blank">{t('footer.source_code')}</a></span>
					</div>
				</div>
				<div className="right">
					<div>
						<span className="git"><a href="https://github.com/srysis" target="_blank">GitHub</a></span>
					</div>
					<div>
						<span><em>denys.yarymovych@gmail.com</em></span>
					</div>
				</div>
			</div>
			<hr />
			<div id="copyright">
				<p>{t('footer.copyright')}</p>
			</div>
		</footer>
	) 
}

export default Footer