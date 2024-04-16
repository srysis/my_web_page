"use strict";

const PATH_TO_IMAGES_OF_ALICE = "images/Alice/";


let image_row = document.querySelector("div#gallery");

for (let counter = 1; counter <= 14; counter++) {
	let image_container = document.createElement("div");
	image_container.setAttribute("class", "image_container");
	let image_element = document.createElement("img");
	image_element.setAttribute("src", PATH_TO_IMAGES_OF_ALICE + counter + ".png");
	image_container.append(image_element);
	image_row.append(image_container);
}

