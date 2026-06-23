import game_shop_image from "../files/portfolio/game_shop.png"
import forum_image from "../files/portfolio/forum.png"
import cookbook_image from "../files/portfolio/cookbook.png"

function PortfolioSection( ) {
	return (
		<section id="portfolio">
			<h2>Portfolio</h2>
			<hr />
			<div id="list">
				<div className="project">
					<div className="overlay">
						<a href="https://srysis-game-shop.netlify.app" target="_blank" rel="noreferrer"></a>
					</div>
					<div className="preview_image">
						<img src={game_shop_image} title="Game Shop" alt="Game Shop" />
					</div>
					<div className="info">
						<h3>Game Shop</h3>
						<p>A 'proof-of-concept' online shop.</p>
						<div>
							<span>React.js</span>
							<span>Node.js</span>
							<span>Express</span>
							<span>MySQL</span>
						</div>
					</div>
				</div>
				<div className="project">
					<div className="overlay">
						<a href="https://srysis-forum.netlify.app" target="_blank" rel="noreferrer"></a>
					</div>
					<div className="preview_image">
						<img src={forum_image} title="Forum" alt="Forum" />
					</div>
					<div className="info">
						<h3>Forum</h3>
						<p>A full-stack forum web-application. Discuss anything or share your pictures!</p>
						<div>
							<span>React.js</span>
							<span>Node.js</span>
							<span>Express</span>
							<span>JWT</span>
							<span>MySQL</span>
						</div>
					</div>
				</div>
				<div className="project">
					<div className="overlay">
						<a href="https://srysis-cookbook.netlify.app" target="_blank" rel="noreferrer"></a>
					</div>
					<div className="preview_image">
						<img src={cookbook_image} title="Cookbook" alt="Cookbook" />
					</div>
					<div className="info">
						<h3>Cookbook</h3>
						<p>A personal 'recipe book' website. Create your recipes and search through them to find a specific recipe.</p>
						<div>
							<span>React.js</span>
							<span>i18n</span>
							<span>Node.js</span>
							<span>Express</span>
							<span>JWT</span>
							<span>MySQL</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PortfolioSection;