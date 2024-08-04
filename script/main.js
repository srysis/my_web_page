"use strict";

let header = document.querySelector("header");

let aside = document.querySelector("aside");
let aside_overlay = document.querySelector("aside > div.overlay");
let aside_content = document.querySelector("#aside_content");
let sidebar_activation_button = document.querySelector("#sidebar_toggle");

header.addEventListener('click', function() {
	if ((event.target.tagName == 'A' && event.target.parentElement.tagName == 'NAV') ||
		 event.target.tagName == 'A' && event.target.parentElement.tagName == 'H1') {
		if (event.target.getAttribute("title") == "You are already here!") { 
			alert("You are already here!");
			event.preventDefault();
		}
		if ((event.target.getAttribute("href") == "#") && (event.target.getAttribute("title") != "You are already here!")) {
			alert("In development.");
			event.preventDefault();
		}
	}
});

function toggleAsideMenu() {
	sidebar_activation_button.classList.toggle("inactive");
	sidebar_activation_button.classList.toggle("active");

	aside_overlay.classList.toggle("hidden");
	aside_overlay.classList.toggle("visible");

	aside_content.classList.toggle("hidden");
	aside_content.classList.toggle("visible");

}

sidebar_activation_button.addEventListener('click', function() {
	toggleAsideMenu();
});

aside.addEventListener('touchstart', function() {
	if ((event.target.tagName == 'DIV') && (event.target.classList.contains("overlay"))) toggleAsideMenu();
});

aside.addEventListener('click', function() {
	if ((event.target.getAttribute("href") == "#") && (event.target.getAttribute("title") == "You are already here!")) {
		alert("You are already here!");
		event.preventDefault();
	}
	if ((event.target.getAttribute("href") == "#") && (event.target.getAttribute("title") != "You are already here!")) {
		alert("In development.");
		event.preventDefault();
	}
});

