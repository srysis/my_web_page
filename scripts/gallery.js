"use strict";

const PATH_TO_IMAGES_OF_ALICE = "images/Alice/";
const PATH_TO_IMAGES_OF_JANE = "images/Jane/";
const PATH_TO_IMAGES_OF_PANDEMONICA = "images/Pandemonica/";
const PATH_TO_IMAGES_OF_WILLOW = "images/Willow/";

let main_element = document.querySelector("main");

let image_fullscreen_container = document.querySelector("div#image_fullscreen_overlay_container");

function generateGallery(current_character) {
	let gallery_element = document.querySelector("div#gallery");

	let images = document.querySelectorAll("div.image_container");
	for (let image of images) {
		image.remove();
	}

	let path_to_images_of_current_character;
	switch (current_character) {
	case 'Alice':
		path_to_images_of_current_character = PATH_TO_IMAGES_OF_ALICE;
		addImages(gallery_element, path_to_images_of_current_character);
		break;
	case 'Jane':
		path_to_images_of_current_character = PATH_TO_IMAGES_OF_JANE;
		addImages(gallery_element, path_to_images_of_current_character);
		break;
	case 'Pandemonica':
		path_to_images_of_current_character = PATH_TO_IMAGES_OF_PANDEMONICA;
		addImages(gallery_element, path_to_images_of_current_character);
		break;
	case 'Willow':
		path_to_images_of_current_character = PATH_TO_IMAGES_OF_WILLOW;
		addImages(gallery_element, path_to_images_of_current_character);
		break;
	}

	let lines = document.querySelectorAll('main > hr');
	for (let line of lines) {
		line.style.display = 'block';
	}
}

function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function generateNumbersSet() {
	let set = new Set();
	while (set.size != 20) {
		set.add(getRandomIntInclusive(1, 20));
	}
	return set;
}

function addImages(gallery_element, path) {
	let images_numbers = generateNumbersSet();

	for (let number of images_numbers) {
		let image_container = document.createElement("div");
		image_container.setAttribute("class", "image_container");
		let image_element = document.createElement("img");
		image_element.setAttribute("src", path + number + ".png");
		image_container.append(image_element);
		gallery_element.append(image_container);

		addEventListenerToImage(image_container);
	}
}

function addEventListenerToImage(image) {
	image.addEventListener("click", function() {
		displayImageInFullscreen(true, event.target.getAttribute("src"));
	});
}

function displayImageInFullscreen(option, image_source = undefined) {
	if (option == true) {
		image_fullscreen_container.style.display = "block";
		let image_element = document.createElement("img");
		image_element.setAttribute("src", image_source);
		image_element.classList.add("image_fullscreen");
		image_fullscreen_container.append(image_element);
		document.body.style.overflow = "hidden";
		main_element.style.marginRight = 2.5 + "%"; // compensate margin for hiding scrollbar, so the layout won't "jump"
	} else {
		image_fullscreen_container.style.display = "none";
		let image_element = document.querySelector("img.image_fullscreen");
		image_element.remove();
		document.body.style.overflow = "visible";
		main_element.style.marginRight = 2 + "%"; // compensate margin for hiding scrollbar, so the layout won't "jump"
	}
}


window.addEventListener('load', function() {
	let gallery_switches = document.querySelector("div#gallery_switches");
	let current_character;
	let current_active_switch = document.querySelector('a.clicked');

	gallery_switches.addEventListener('click', function() {
		switch (event.target.id) {
		case 'alice':
			current_character = 'Alice';

			event.target.classList.add('clicked');
			if (current_active_switch != null) { 
				if (event.target != current_active_switch) current_active_switch.classList.remove('clicked'); 
			}
			current_active_switch = event.target;

			generateGallery(current_character);
			break;

		case 'jane':
			current_character = 'Jane';

			event.target.classList.add('clicked');
			if (current_active_switch != null) { 
				if (event.target != current_active_switch) current_active_switch.classList.remove('clicked'); 
			}
			current_active_switch = event.target;

			generateGallery(current_character);
			break;

		case 'pandemonica':
			current_character = 'Pandemonica';

			event.target.classList.add('clicked');
			if (current_active_switch != null) { 
				if (event.target != current_active_switch) current_active_switch.classList.remove('clicked'); 
			}
			current_active_switch = event.target;

			generateGallery(current_character);
			break;

		case 'willow':
			current_character = 'Willow';

			event.target.classList.add('clicked');
			if (current_active_switch != null) { 
				if (event.target != current_active_switch) current_active_switch.classList.remove('clicked'); 
			}
			current_active_switch = event.target;

			generateGallery(current_character);
			break;
		}
		console.log(current_character);
	});

	image_fullscreen_container.addEventListener("click", function() {
		if (event.target.tagName == "DIV") displayImageInFullscreen(false);
	});

	console.log("page loaded");


});








