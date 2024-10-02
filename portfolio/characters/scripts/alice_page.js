"use strict";

let alice_official_skins_container = document.querySelector("div#alice_official_skins");
let alice_dlc_skins_container = document.querySelector("div#alice_dlc_skins");

let image_fullscreen_container = document.querySelector("div#image_fullscreen_overlay_container");
let close_image_fullscreen_container_button = document.querySelector("#close_button");

let clientWidth = document.documentElement.clientWidth;

if (alice_official_skins_container != null) {
	alice_official_skins_container.addEventListener('click', function() {
		if (event.target.tagName != "IMG") return;
		displayImageInFullscreen(true);
	});
}

if (alice_dlc_skins_container != null) {
	alice_dlc_skins_container.addEventListener('click', function() {
		if (event.target.tagName != "IMG") return;
		displayImageInFullscreen(true);
	});
}

function displayImageInFullscreen(option) {
	if (option == true) {
		image_fullscreen_container.classList.toggle("inactive");
		image_fullscreen_container.classList.toggle("active");

		let image_element = document.querySelector("img.image_fullscreen");
		image_element.setAttribute("src", event.target.getAttribute("src"));
		image_element.classList.add("image_fullscreen");
		image_element.classList.add("alice");
		image_fullscreen_container.append(image_element);

		document.body.style.overflow = "hidden";

		if (clientWidth >= 550) { 					     // check if it is the desktop layout
			document.body.style.marginRight = 0.4 + "%"; // add a small amount of margin to prevent "jumping" layout
		}

	} else if (option == false) {
		image_fullscreen_container.classList.toggle("inactive");
		image_fullscreen_container.classList.toggle("active");
		
		let image_element = document.querySelector("img.image_fullscreen");
		image_element.setAttribute("src", " ");

		document.body.style.overflow = "visible";

		if (clientWidth >= 550) { 					     // check if it is the desktop layout
			document.body.style.marginRight = 0; 	     // remove added margin
		}

	}
}

document.addEventListener('DOMContentLoaded', function() {
	close_image_fullscreen_container_button.addEventListener("click", function() {
		displayImageInFullscreen(false);
	});
})