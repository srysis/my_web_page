import resume_en from "../files/cv/resume_en.jpg"
import resume_cz from "../files/cv/resume_cz.jpg"
import resume_ua from "../files/cv/resume_ua.jpg"

function Resume() {

	return (
		<section id="resume">
			<h2>Resume</h2>
			<hr />
			<p>Available in three languages:</p>
			<div id="resumes">
				<div className="resume en">
					<div className="overlay">
						<a href="https://drive.google.com/file/d/1WLmnT231G0Yoj2Cy6v94UlKyBqVN0XBX/view?usp=drive_link" target="_blank" rel="noreferrer"></a>
					</div>
					<div className="preview">
						<img src={resume_en} alt="CV in English"/>
					</div>
					<p>English</p>
				</div>
				<div className="resume cz">
					<div className="overlay">
						<a href="https://drive.google.com/file/d/1p2f3MQkbfGnYbNovBmaBHojOpnhvCbF-/view?usp=drive_link" target="_blank" rel="noreferrer"></a>
					</div>
					<div className="preview">
						<img src={resume_cz} alt="CV in Czech"/>
					</div>
					<p>Čeština (Czech)</p>
				</div>
				<div className="resume ua">
					<div className="overlay">
						<a href="https://drive.google.com/file/d/11Z35JEUJbe-MfdjIF7bvz_w0iItwgAGJ/view?usp=drive_link" target="_blank" rel="noreferrer"></a>
					</div>
					<div className="preview">
						<img src={resume_ua} alt="CV in Ukrainian"/>
					</div>
					<p>Українська (Ukrainian)</p>
				</div>
			</div>
		</section>
	)
}

export default Resume;