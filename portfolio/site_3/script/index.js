"use strict";

const PATH_TO_IMAGES = "files/main/happy_couple/";

let aside = document.querySelector("aside");
let aside_content = document.querySelector("#aside_content");
let sidebar_activation_button = document.querySelector("button#sidebar_menu");

let prev_photo_button = document.querySelector("#prev_photo");
let next_photo_button = document.querySelector("#next_photo");
let photo = document.querySelector("#photo_container > img");
let current_photo_number = 1;

let contact_form = document.querySelector("form");
let contact_form_input_elements = document.querySelectorAll("input[type='text']");
let contact_success_element = document.querySelector("div#contact_success");

let info_block = document.querySelector("div#info");
let cross_button = document.querySelector("div#info > img");

function toggleAside() {
	aside.classList.toggle("hidden");
	aside.classList.toggle("visible");

	aside_content.classList.toggle("hidden");
	aside_content.classList.toggle("visible");
}

function changePhoto(option) {
	if (option == "left") {
		current_photo_number--;

		if (current_photo_number >= 1) {
			photo.setAttribute("src", PATH_TO_IMAGES + current_photo_number + ".png");
		} else {
			current_photo_number = 4;
			photo.setAttribute("src", PATH_TO_IMAGES + current_photo_number + ".png");
		}

	} else if (option == "right") {
		current_photo_number++;

		if (current_photo_number <= 4) {
			photo.setAttribute("src", PATH_TO_IMAGES + current_photo_number + ".png");
		} else {
			current_photo_number = 1;
			photo.setAttribute("src", PATH_TO_IMAGES + current_photo_number + ".png");
		}
		
	}
}

sidebar_activation_button.addEventListener('click', function() {
	toggleAside();
});

aside.addEventListener('touchstart', function() {
	if ((event.target.tagName == 'DIV') && (event.target.className == 'overlay')) toggleAside();
});


prev_photo_button.addEventListener("click", function() {
	changePhoto("left");
});

next_photo_button.addEventListener("click", function() {
	changePhoto("right");
});


contact_form.addEventListener("submit", function() {
	let errors = 0;

	for (let element of contact_form_input_elements) {
		if (element.value == "") {
			errors++;
			element.nextElementSibling.innerHTML = "This field is empty.";
			element.classList.add("invalid");
			element.nextElementSibling.style.visibility = "visible";
		}
	}

	if (errors >= 1) {
		errors = 0;
		event.preventDefault();
	} else if (errors == 0) {
		contact_form.remove();
		contact_success_element.style.display = "block";
		event.preventDefault();
	}
	
});

for (let element of contact_form_input_elements) {
	element.addEventListener("focus" , function() {
		element.nextElementSibling.style.visibility = "hidden";
		element.classList.remove("invalid");
	});

	element.addEventListener("blur", function() {
		if (element.value == "") {
			element.nextElementSibling.innerHTML = "This field is empty.";
			element.classList.add("invalid");
			element.nextElementSibling.style.visibility = "visible";
		}
	});
}


setTimeout(() => {
	info_block.style.display = "block";
}, 500);

cross_button.addEventListener("click", function() {
	info_block.remove();
})