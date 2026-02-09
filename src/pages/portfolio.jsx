import React from 'react'

import Footer from "../components/Footer.jsx"

import useTitle from "../components/hooks/useTitle.jsx"

import characters_image from "../files/portfolio/characters.png"
import gallery_image from "../files/portfolio/gallery.png"
import dart_image from "../files/portfolio/dart.png"
import corona_image from "../files/portfolio/corona.png"
import marry_house_image from "../files/portfolio/marry_house.png"
import car_game_image from "../files/portfolio/car_game.png"
import json_editor_image from "../files/portfolio/json_editor.png"
import game_shop_image from "../files/portfolio/game_shop.png"
import forum_image from "../files/portfolio/forum.png"
import cookbook_image from "../files/portfolio/cookbook.png"

import "../style/portfolio/portfolio.css"
import "../style/portfolio/portfolio-phone.css"


function Portfolio() {
	useTitle("Portfolio");

	function onClickHandler(site) {
		switch (site) {
		case 1:
			window.open("site_1/site_1.html", "_blank");
			break;
		case 2:
			window.open("site_2/site_2.html", "_blank");
			break;
		case 3:
			window.open("site_3/site_3.html", "_blank");
			break;
		case 4:
			window.open("site_4/site_4.html", "_blank");
			break;
		case 5:
			window.open("json_editor/json_editor.html", "_blank");
			break;
		case 6:
			window.open("characters/characters.html", "_blank");
			break;
		case 7:
			window.open("gallery/gallery.html", "_blank");
			break;
		case 8:
			window.open("https://srysis-game-shop.netlify.app", "_blank");
			break;
		case 9:
			window.open("https://srysis-forum.netlify.app/", "_blank");
			break;
		case 10:
			window.open("https://srysis-cookbook.netlify.app/", "_blank");
			break;
		default:
			console.error("No such value.");
			break;
		}
	}

	function expandList(event) {
		event.currentTarget.parentElement.classList.toggle("active");

		let list_content = event.currentTarget.nextElementSibling;

		if (list_content.style.maxHeight) {
			list_content.style.maxHeight = null;
		} else {
			list_content.style.maxHeight = list_content.scrollHeight + "px";
		}
	}

	function onPopStateHandler() {
		window.scrollTo(0, JSON.parse(window.sessionStorage.getItem('scroll_pos')));

		window.removeEventListener('popstate', onPopStateHandler);
	}

	window.addEventListener("popstate", onPopStateHandler);

	return (
		<>
			<h1 id="title">Portfolio</h1>
			<main>
				<div id="full_projects">
					<button type="button" className="toggle_full_projects" onClick={expandList}>Full projects</button>
					<div className="list_content">
						<p className="list_description">
							This section contains projects, that took relatively longer to make. 
							These projects have considerably more features, compared to other projects.
						</p>
						<div className="link_to_project" onClick={() => onClickHandler(8)}>
							<img src={game_shop_image} title="Game Shop" alt="Game Shop" style={{ "objectPosition": "10% 10%" }} />
							<div className="text">
								<h3>Game Shop</h3>
								<p>A 'proof-of-concept' online shop.</p>
							</div>
						</div>
						<div className="link_to_project" onClick={() => onClickHandler(9)}>
							<img src={forum_image} title="Forum" alt="Forum" style={{ "objectPosition": "10% 10%" }} />
							<div className="text">
								<h3>"Forum"</h3>
								<p>A full-stack forum web-application.</p>
							</div>
						</div>
						<div className="link_to_project" onClick={() => onClickHandler(10)}>
							<img src={cookbook_image} title="Cookbook" alt="Cookbook" style={{ "objectPosition": "0% 10%" }} />
							<div className="text">
								<h3>Cookbook</h3>
								<p>A personal 'recipe book' website. Create your recipes and search through them to find a specific recipe.</p>
							</div>
						</div>
					</div>
				</div>
				<div id="side_projects">
					<button type="button" className="toggle_side_projects" onClick={expandList}>Side projects</button>
					<div className="list_content">
						<p className="list_description">This section contains smaller projects. They don't have a lot of features and usually revolve around one or two functions.</p>
						<div className="link_to_project" onClick={() => onClickHandler(6)}>
							<img src={characters_image} title="Characters" alt="Characters" />
							<div className="text">
								<h3>Characters</h3>
								<p>A page where you can read some information about my favorite characters.</p>
							</div>
						</div>
						<div className="link_to_project" onClick={() => onClickHandler(7)}>
							<img src={gallery_image} title="Gallery" alt="Gallery" />
							<div className="text">
								<h3>Image gallery</h3>
								<p>A page where you can see images of my favorite characters.</p>
							</div>
						</div>
						<div className="link_to_project" onClick={() => onClickHandler(5)}>
							<img src={json_editor_image} title="JSON editor" alt="JSON editor" />
							<div className="text">
								<h3>JSON Editor</h3>
								<p>A simple and very basic JSON editor app.</p>
							</div>
						</div>
					</div>
				</div>
				<div id="landing_pages">
					<button type="button" className="toggle_landing_pages" onClick={expandList}>Landing pages</button>
					<div className="list_content">
						<p className="list_description">This section contains landing pages that I've recreated. Templates for them were found on different and appropriate web-sites.</p>
						<div className="link_to_project" onClick={() => onClickHandler(1)} >
							<img src={dart_image} title="DART SERVICE MANAGER" alt="DART SERVICE MANAGER" />
							<div className="text">
								<h3>DART SERVICE MANAGER</h3>
								<p>A landing page template that I have implemented and adapted to smaller screens.</p>
							</div>
						</div>
						<div className="link_to_project" onClick={() => onClickHandler(2)} >
							<img src={corona_image} title="CORONAVIRUS AWARENESS SPREAD" alt="CORONAVIRUS AWARENESS SPREAD" />
							<div className="text">
								<h3>CORONAVIRUS AWARENESS SPREAD</h3>
								<p>A landing page template that I have implemented and adapted to smaller screens.</p>
							</div>
						</div>
						<div className="link_to_project" onClick={() => onClickHandler(3)}>
							<img src={marry_house_image} title="MARRY HOUSE" alt="MARRY HOUSE" />
							<div className="text">
								<h3>MARRY HOUSE</h3>
								<p>A landing page template that I have implemented and adapted to smaller screens.</p>
							</div>
						</div>
						<div className="link_to_project" onClick={() => onClickHandler(4)}>
							<img src={car_game_image} title="SPEED CAR GAME" alt="SPEED CAR GAME" />
							<div className="text">
								<h3>SPEED CAR GAME</h3>
								<p>A landing page template that I have implemented and adapted to smaller screens.</p>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer></Footer>
		</>
	)
}

export default Portfolio