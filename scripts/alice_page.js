"use strict";

let alice_official_skins_container = document.querySelector("div#alice_official_skins");
let alice_dlc_skins_container = document.querySelector("div#alice_dlc_skins");
let image_container = document.querySelector("div#image_container");
let document_main = document.querySelector("main");

if (alice_official_skins_container != null) {
	alice_official_skins_container.addEventListener('click', function() {
		if (event.target.tagName != "IMG") return;
		toggleImageFullscreen(true);
	});
}

if (alice_dlc_skins_container != null) {
	alice_dlc_skins_container.addEventListener('click', function() {
		if (event.target.tagName != "IMG") return;
		toggleImageFullscreen(true);
	});
}

if (image_container != null) {
	image_container.addEventListener('click', function() {
		if (event.target.tagName == 'DIV') toggleImageFullscreen(false);
	});
}

function toggleImageFullscreen(option) {
	if (option == true) {
		image_container.style.display = "block";
		let img_tag = document.createElement("img");
		img_tag.setAttribute("src", event.target.getAttribute("src"));
		img_tag.classList.add("image_fullscreen");
		img_tag.classList.add("alice");
		image_container.append(img_tag);
		document.body.style.overflow = "hidden";
		document_main.style.marginRight = 2.5 + "%"; // compensate margin for hiding scrollbar, so the layout won't "jump"
	} else if (option == false) {
		image_container.style.display = "none";
		let img_tag = document.querySelector("img.image_fullscreen");
		img_tag.remove();
		document.body.style.overflow = "visible";
		document_main.style.marginRight = 2 + "%"; // back to original margin value
	}
}