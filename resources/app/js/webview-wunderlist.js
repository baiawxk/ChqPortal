$(function(){
	var webview = $("<webview></webview>")
					.css("width","100%")
					.css("height","100%")
					.attr("position","absolute")
					.attr("src","https://www.wunderlist.com/webapp")
					.attr("id","wunderlist")
					.appendTo('.content')
	webview.on("dom-ready",function() {
		console.log("dom-ready",arguments);
	});

	webview.on("did-start-loading",function() {
		console.log("did-start-loading",arguments);
	});

	webview.on("did-stop-loading",function() {
		console.log("did-stop-loading",arguments);
	});

	webview.on("load-commit",function() {
		console.log("load-commit",arguments);
	});

	webview.on("did-finish-load",function() {
		console.log("did-finish-load",arguments);
	});

	webview.on("did-fail-load",function() {
		console.log("did-fail-load",arguments);
	});

	webview.on("did-frame-finish-load",function() {
		console.log("did-frame-finish-load",arguments);
	});

	webview.on("did-get-response-details",function() {
		console.log("did-get-response-details",arguments);
	});

	webview.on("did-get-redirect-request",function() {
		console.log("did-get-redirect-request",arguments);
	});

	webview.on("page-title-updated",function() {
		console.log("page-title-updated",arguments);
	});

	webview.on("page-favicon-updated",function() {
		console.log("page-favicon-updated",arguments);
	});

	webview.on("enter-html-full-screen",function() {
		console.log("enter-html-full-screen",arguments);
	});

	webview.on("leave-html-full-screen",function() {
		console.log("leave-html-full-screen",arguments);
	});

	webview.on("found-in-page",function() {
		console.log("found-in-page",arguments);
	});

	webview.on("new-window",function() {
		console.log("new-window",arguments);
	});

	webview.on("will-navigate",function() {
		console.log("will-navigate",arguments);
	});

	webview.on("did-navigate",function() {
		console.log("did-navigate",arguments);
	});

	webview.on("did-navigate-in-page",function() {
		console.log("did-navigate-in-page",arguments);
	});

	webview.on("close",function() {
		console.log("close",arguments);
	});

	webview.on("ipc-message",function() {
		console.log("ipc-message",arguments);
	});

	webview.on("crashed",function() {
		console.log("crashed",arguments);
	});

	webview.on("gpu-crashed",function() {
		console.log("gpu-crashed",arguments);
	});

	webview.on("plugin-crashed",function() {
		console.log("plugin-crashed",arguments);
	});

	webview.on("destroyed",function() {
		console.log("destroyed",arguments);
	});

	webview.on("media-started-playing",function() {
		console.log("media-started-playing",arguments);
	});

	webview.on("media-paused",function() {
		console.log("media-paused",arguments);
	});

	webview.on("did-change-theme-color",function() {
		console.log("did-change-theme-color",arguments);
	});

	

});