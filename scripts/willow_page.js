"use strict";

let willow_skins_container = document.querySelector("div#willow_skins");
let image_container = document.querySelector("div#image_container");

let clientWidth = document.documentElement.clientWidth;

if (willow_skins_container != null) {
	willow_skins_container.addEventListener('click', function() {
		if (event.target.tagName != "IMG") return;
		displayImageInFullscreen(true);
	});
}
if (image_container != null) {
	image_container.addEventListener('click', function() {
		if (event.target.tagName == 'DIV') displayImageInFullscreen(false);
	});
}

function displayImageInFullscreen(option) {
	if (option == true) {
		image_container.style.display = "block";
		let img_tag = document.createElement("img");
		img_tag.setAttribute("src", event.target.getAttribute("src"));
		img_tag.classList.add("image_fullscreen");
		img_tag.classList.add("willow");
		image_container.append(img_tag);
		
		document.body.style.overflow = "hidden";

		if (clientWidth >= 550) { 						 // check if it is the desktop layout
			document.body.style.marginRight = 0.4 + "%"; // add a small amount of margin to prevent "jumping" layout
		}

	} else if (option == false) {
		image_container.style.display = "none";
		let img_tag = document.querySelector("img.image_fullscreen");
		img_tag.remove();

		document.body.style.overflow = "visible";

		if (clientWidth >= 550) { 					    // check if it is the desktop layout
			document.body.style.marginRight = 0;        // remove added margin
		}

	}
}