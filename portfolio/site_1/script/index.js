"use strict";

let aside = document.querySelector("aside");
let aside_content = document.querySelector("#aside_content");
let sidebar_activation_button = document.querySelector("button#sidebar_menu");

let services_list_elements = document.querySelectorAll(".list_element_title");

let team_members = document.querySelectorAll("#team_members > img");
let current_active_team_member = document.querySelector("#team_members > img.active");
let team_member_bio = document.querySelector("#team_member_bio");

let contact_form = document.querySelector("form");
let contact_form_input_elements = document.querySelectorAll("input[type='text'], input[type='email'], input[type='tel']");
let contact_success_element = document.querySelector("div#contact_success");

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


for (let services_list_element of services_list_elements) {
	services_list_element.addEventListener('click', function() {
		services_list_element.parentElement.classList.toggle("active");
	});
}


for (let team_member of team_members) {
	team_member.addEventListener('click', function() {
		if (team_member == current_active_team_member) return;

		team_member.classList.toggle("active");
		current_active_team_member.classList.toggle("active");
		current_active_team_member = team_member;

		if (current_active_team_member.getAttribute("src").endsWith("1.png")) {
			console.log("text change");
			team_member_bio.innerHTML = "<h2>Amy Wong</h2>";
			team_member_bio.innerHTML += "<p>Nunc posuere euismod blandit. Nullam aliquet ipsum pellentesque nulla placerat mollis. Duis sit amet imperdiet orci. Sed vehicula urna quis nulla maximus, laoreet ultrices sapien consectetur.</p>";
		} else if (current_active_team_member.getAttribute("src").endsWith("2.png")) {
			console.log("text change");
			team_member_bio.innerHTML = "<h2>Sophie Turner</h2>";
			team_member_bio.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit, neque non pulvinar ullamcorper, felis tortor sagittis ex, dictum venenatis dui leo id dui.</p>";
		} else if (current_active_team_member.getAttribute("src").endsWith("3.png")) {
			console.log("text change");
			team_member_bio.innerHTML = "<h2>Adam Jensen</h2>";
			team_member_bio.innerHTML += "<p>Duis lacinia at risus sed cursus. Suspendisse potenti. Mauris in orci id erat tempor scelerisque. Donec blandit est id lectus mollis, ac blandit sapien sagittis. In sit amet tempor diam. Etiam sodales congue sapien, non suscipit lacus consequat vitae.</p>";
		}
	});
}


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
});