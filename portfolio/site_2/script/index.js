"use strict";

let aside = document.querySelector("aside");
let aside_content = document.querySelector("#aside_content");
let sidebar_activation_button = document.querySelector("button#sidebar_menu");

let form = document.querySelector("form");
let error_tooltip = document.querySelector("#error_tooltip");
let subscription_success_element = document.querySelector("div#subscription_success");

let info_block = document.querySelector("div#info");
let cross_button = document.querySelector("div#info > img");


function toggleAside() {
	aside.classList.toggle("hidden");
	aside.classList.toggle("visible");

	aside_content.classList.toggle("hidden");
	aside_content.classList.toggle("visible");
}

sidebar_activation_button.addEventListener('click', function() {
	toggleAside();
});


aside.addEventListener('touchstart', function() {
	if ((event.target.tagName == 'DIV') && (event.target.className == 'overlay')) toggleAside();
});


form.addEventListener("submit", function() {
	if (form.elements.email_address.value == "") { 
		error_tooltip.style.visibility = "visible";
		error_tooltip.innerHTML = "This field is empty.";
	} else if (!form.elements.email_address.value.includes('@')) {
		error_tooltip.style.visibility = "visible";
		error_tooltip.innerHTML = "Not a vaild e-mail address.";
	} else {
		form.remove();
		subscription_success_element.style.display = 'block';
	}
	event.preventDefault();
});

form.elements.email_address.addEventListener("focus", function() {
	error_tooltip.style.visibility = "hidden";
});

form.elements.email_address.addEventListener("blur", function() {
	if (form.elements.email_address.value == "") { 
		error_tooltip.style.visibility = "visible";
		error_tooltip.innerHTML = "This field is empty.";
	} else if (!form.elements.email_address.value.includes('@')) {
		error_tooltip.style.visibility = "visible";
		error_tooltip.innerHTML = "Not a vaild e-mail address.";
	}
});


setTimeout(() => {
	info_block.style.display = "block";
}, 500);

cross_button.addEventListener("click", function() {
	info_block.remove();
});