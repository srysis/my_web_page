"use strict";

let header = document.querySelector("header");
header.addEventListener('click', function() {
	if ((event.target.tagName == 'A' && event.target.parentElement.tagName == 'NAV') ||
		 event.target.tagName == 'A' && event.target.parentElement.tagName == 'H1') {
		if (event.target.getAttribute("title") == "You are already here!") { 
			alert("You are already here!");
			event.preventDefault();
		}
	}
});