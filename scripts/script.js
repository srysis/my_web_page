"use strict";

let alice_official_skins_container = document.querySelector("div#alice_official_skins");
let alice_dlc_skins_container = document.querySelector("div#alice_dlc_skins");
let willow_skins_container = document.querySelector("div#willow_skins");

if (alice_official_skins_container != null) {
	alice_official_skins_container.addEventListener('click', function() {
		if (event.target.tagName != "IMG") return;

		alert('click on image');
	});
}
if (alice_dlc_skins_container != null) {
	alice_dlc_skins_container.addEventListener('click', function() {
		if (event.target.tagName != "IMG") return;

		alert('click on dlc image');
	});
}

if (willow_skins_container != null) {
	willow_skins_container.addEventListener('click', function() {
		if (event.target.tagName != "IMG") return;

		alert('click on willow image');
	});
}