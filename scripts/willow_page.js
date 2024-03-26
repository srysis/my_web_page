"use strict";


let willow_skins_container = document.querySelector("div#willow_skins");

if (willow_skins_container != null) {
	willow_skins_container.addEventListener('click', function() {
		if (event.target.tagName != "IMG") return;
		console.log("click on willow image");
	});
}