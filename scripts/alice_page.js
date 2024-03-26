"use strict";

let alice_official_skins_container = document.querySelector("div#alice_official_skins");
let alice_dlc_skins_container = document.querySelector("div#alice_dlc_skins");

if (alice_official_skins_container != null) {
	alice_official_skins_container.addEventListener('click', function() {
		if (event.target.tagName != "IMG") return;
		console.log("click on alice image");
	});
}
if (alice_dlc_skins_container != null) {
	alice_dlc_skins_container.addEventListener('click', function() {
		if (event.target.tagName != "IMG") return;
		console.log("click on dlc image");
	});
}