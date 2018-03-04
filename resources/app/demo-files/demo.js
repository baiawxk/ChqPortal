"use strict";
// function init() {
// 	var sm = document.getElementById("navigation-sidemenu"),
// 	    smitems = sm.querySelectorAll(".menu > li:not(.divider) > a");

// 	function clickHandler() {
// 		return function() {
// 			if (Responsive.device != "desktop") {
// 				SideMenu.hide(sm);
// 			}
// 			for (var ind = 0; ind < smitems.length; ind++) {
// 				smitems[ind].parentNode.className = "";
// 			}
// 			this.parentNode.className = "selected color-blue-500";
// 			document.querySelector(".main-content").scrollTop = 0;
// 		};
// 	}

// 	for (var i = 0, len = smitems.length; i < len; i++) {
// 		smitems[i].addEventListener("click", clickHandler());
// 	}
// }

// window.addEventListener("DOMContentLoaded", function() {
// 	var md = new Material();
// 	if ((window.location.hash === "") || (document.querySelector(".navigation-section" + window.location.hash) === null)) {
// 		window.location.hash = "#main";
// 	}
// 	document.querySelector("#navigation-sidemenu a[href='" + window.location.hash + "']").parentNode.className = "selected color-blue-500";
// 	init();
// });
var class_MenuHighlight = "selected color-blue-500";
var sm = $("#navigation-sidemenu");
var smli = sm.find(".menu > li:not(.divider)");
var smitems = sm.find(".menu > li:not(.divider) > a");
var mc = $(".main-content");

$(function() {
	var md = new Material();
	window.onhashchange = hashChange;
	hashChange();
})

function hashChange(e) {
	if(location.hash=="" || $("[href='"+location.hash+"']").length==0)
	{
		location.hash = "#main";
		return ;
	}
	if (Responsive.device != "desktop") { 
		SideMenu.hide(sm);
	}
	smli.removeClass(class_MenuHighlight);
	$("[href='"+location.hash+"']").parent().addClass(class_MenuHighlight)
}

