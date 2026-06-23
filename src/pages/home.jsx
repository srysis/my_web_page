import Footer from "../components/Footer.jsx"

import Intro from "../components/Intro.jsx"
import AboutMe from "../components/AboutMe.jsx"
import MajorSkills from "../components/MajorSkills.jsx"
import MinorSkills from "../components/MinorSkills.jsx"

import Portfolio from "../components/PortfolioSection.jsx"
import Hiring from "../components/Hire.jsx"

function Home() {
	return (
		<>
			<Intro />
			<main>
				<section id="info_and_skills">
					<AboutMe />
					<MajorSkills />
					<MinorSkills />
				</section>
				<Portfolio />
			</main>
			<Footer />
		</>
	)
}

export default Home