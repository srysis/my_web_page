import React from "react"

import button_icon from "../files/bars-solid.svg"

function AsideTogglerButton( {toggleVisibilityFunction} ) {

	function onClickHandler() {
		toggleVisibilityFunction();
	}

    return (
        <button id="sidebar_menu" onClick={onClickHandler} ><img src={button_icon} alt="Toggle sidebar"/></button>
    )
}

export default AsideTogglerButton;