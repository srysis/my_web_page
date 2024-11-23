"use strict";

const PATH_TO_IMAGES_OF_ALICE = "images/Alice/";
const PATH_TO_IMAGES_OF_JANE = "images/Jane/";
const PATH_TO_IMAGES_OF_PANDEMONICA = "images/Pandemonica/";
const PATH_TO_IMAGES_OF_WILLOW = "images/Willow/";

let clientWidth = document.documentElement.clientWidth;

let main_element = document.querySelector("main");

let image_fullscreen_container = document.querySelector("div#image_fullscreen_overlay_container");
let close_image_fullscreen_container_button = document.querySelector("#close_button");


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
		event.target.classList.toggle("current_photo");

		displayImageInFullscreen(true, event.target.getAttribute("src"));
	});
}

function displayImageInFullscreen(option, image_source = undefined) {
	if (option == true) {
		image_fullscreen_container.classList.toggle("inactive");
		image_fullscreen_container.classList.toggle("active");

		let image_element = document.querySelector("img.image_fullscreen");
		image_element.setAttribute("src", image_source);

		document.body.style.overflow = "hidden";

		if (clientWidth >= 550) { 						   // check if it is the desktop layout
			document.body.style.marginRight = 0.4 + "%";   // add a small amount of margin to prevent "jumping" layout
		}

		addEventListenersToButtons();

	} else {
		image_fullscreen_container.classList.toggle("inactive");
		image_fullscreen_container.classList.toggle("active");

		let image_element = document.querySelector("img.image_fullscreen");
		image_element.setAttribute("src", " ");

		document.body.style.overflow = "visible";

		if (clientWidth >= 550) { 					  	  // check if it is the desktop layout
			document.body.style.marginRight = 0; 	      // remove added margin
		}

		removeEventListenersFromButtons();
	}
}

function switchToNextImage() {
	let current_photo = document.querySelector("img.current_photo");

	if (current_photo.parentElement.nextElementSibling != null) {
		current_photo.classList.toggle("current_photo");
		current_photo.parentElement.nextElementSibling.firstElementChild.classList.toggle("current_photo");

		let image_container = document.querySelector("img.image_fullscreen");
		image_container.setAttribute("src", document.querySelector("img.current_photo").getAttribute("src"));
	}
}

function switchToPreviousImage() {
	let current_photo = document.querySelector("img.current_photo");

	if (current_photo.parentElement.previousElementSibling != null) {
		current_photo.classList.toggle("current_photo");
		current_photo.parentElement.previousElementSibling.firstElementChild.classList.toggle("current_photo"); // don't ask.

		let image_container = document.querySelector("img.image_fullscreen");
		image_container.setAttribute("src", document.querySelector("img.current_photo").getAttribute("src"));
	}
}


// These functions were made to avoid code duplicating and serve as event handlers for image switching
function handleSwitchToNextImageEvent(event) {
	if (event.type == "click" || (event.type == "keydown" && event.code == "ArrowRight")) {
		switchToNextImage();
	} 
}

function handleSwitchToPrevImageEvent(event) {
	if (event.type == "click" || (event.type == "keydown" && event.code == "ArrowLeft")) {
		switchToPreviousImage();
	} 
}
// ---------------------------------------------------------------------------------------------------

function addEventListenersToButtons() {
	let prev_photo_button = document.querySelector("#prev_photo");
	let next_photo_button = document.querySelector("#next_photo");	

	prev_photo_button.addEventListener("click", handleSwitchToPrevImageEvent);
	next_photo_button.addEventListener("click", handleSwitchToNextImageEvent);

	document.addEventListener("keydown", handleSwitchToPrevImageEvent);
	document.addEventListener("keydown", handleSwitchToNextImageEvent);

}

function removeEventListenersFromButtons() {
	let prev_photo_button = document.querySelector("#prev_photo");
	let next_photo_button = document.querySelector("#next_photo");

	prev_photo_button.removeEventListener("click", switchToPreviousImage);
	next_photo_button.removeEventListener("click", switchToNextImage);

	document.removeEventListener("keydown", handleSwitchToPrevImageEvent);
	document.removeEventListener("keydown", handleSwitchToNextImageEvent);
}


document.addEventListener('DOMContentLoaded', function() {
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

	close_image_fullscreen_container_button.addEventListener("click", function() {
		displayImageInFullscreen(false);
		document.querySelector("img.current_photo").classList.toggle("current_photo");
	});


	console.log("page loaded");


});








