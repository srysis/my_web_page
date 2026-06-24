import Footer from "../components/Footer.jsx"

import Intro from "../components/Intro.jsx"
import AboutMe from "../components/AboutMe.jsx"
import MajorSkills from "../components/MajorSkills.jsx"
import MinorSkills from "../components/MinorSkills.jsx"
import Portfolio from "../components/PortfolioSection.jsx"
import Resume from "../components/Resume.jsx"

import LocaleSwitcher from "../components/LocaleSwitcher.jsx"

function Home() {
	return (
		<>
			<LocaleSwitcher />
			<Intro />
			<main>
				<section id="info_and_skills">
					<AboutMe />
					<MajorSkills />
					<MinorSkills />
				</section>
				<Portfolio />
				<Resume />
			</main>
			<Footer />
		</>
	)
}

export default Home