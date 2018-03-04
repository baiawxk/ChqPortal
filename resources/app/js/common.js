var _shell = require("electron").shell;
var _webview = {};

function browser(url) {
	_shell.openExternal(url);
}

function webview(id, url) {
	if (!_webview[id]) {
		_webview[id] = $("<webview></webview>")
			.css("width", "100%")
			.css("height", "100%")
			// .attr("position", "absolute")
			.attr("plugins", "")
			.attr("src", url)
			.attr("id", id)
			.appendTo('.content')
		webviewInit(_webview[id]);
	}
	return _webview[id];
}

function webviewInit(webview) {
	webview.on("dom-ready", function() {
		console.log(this.getTitle(),this.getURL(),"dom-ready",arguments);
	});

	webview.on("did-start-loading", function() {
		console.log(this.getTitle(),this.getURL(),"did-start-loading",arguments);
	});

	webview.on("did-stop-loading", function() {
		console.log(this.getTitle(),this.getURL(),"did-stop-loading",arguments);
	});

	webview.on("load-commit", function() {
		console.log(this.getTitle(),this.getURL(),"load-commit",arguments);
	});

	webview.on("did-finish-load", function() {
		console.log(this.getTitle(),this.getURL(),"did-finish-load",arguments);
	});

	webview.on("did-fail-load", function() {
		console.log(this.getTitle(),this.getURL(),"did-fail-load",arguments);
	});

	webview.on("did-frame-finish-load", function() {
		// console.log(this.getTitle(),this.getURL(),"did-frame-finish-load",arguments);
	});

	webview.on("did-get-response-details", function() {
		// console.log(this.getTitle(),this.getURL(),"did-get-response-details",arguments);
	});

	webview.on("did-get-redirect-request", function() {
		console.log(this.getTitle(),this.getURL(),"did-get-redirect-request",arguments);
	});

	webview.on("page-title-updated", function() {
		// console.log(this.getTitle(),this.getURL(),"page-title-updated",arguments);
	});

	webview.on("page-favicon-updated", function() {
		// console.log(this.getTitle(),this.getURL(),"page-favicon-updated",arguments);
	});

	webview.on("enter-html-full-screen", function() {
		console.log(this.getTitle(),this.getURL(),"enter-html-full-screen",arguments);
	});

	webview.on("leave-html-full-screen", function() {
		console.log(this.getTitle(),this.getURL(),"leave-html-full-screen",arguments);
	});

	webview.on("found-in-page", function() {
		console.log(this.getTitle(),this.getURL(),"found-in-page",arguments);
	});

	webview.on("new-window", function(e) {
		console.log(this.getTitle(),this.getURL(),"new-window",arguments);
		window.open(e.originalEvent.url);
	});

	webview.on("will-navigate", function() {
		console.log(this.getTitle(),this.getURL(),"will-navigate",arguments);
	});

	webview.on("did-navigate", function() {
		console.log(this.getTitle(),this.getURL(),"did-navigate",arguments);
	});

	webview.on("did-navigate-in-page", function() {
		console.log(this.getTitle(),this.getURL(),"did-navigate-in-page",arguments);
	});

	webview.on("close", function() {
		console.log(this.getTitle(),this.getURL(),"close",arguments);
	});

	webview.on("ipc-message", function() {
		console.log(this.getTitle(),this.getURL(),"ipc-message",arguments);
	});

	webview.on("crashed", function() {
		console.log(this.getTitle(),this.getURL(),"crashed",arguments);
	});

	webview.on("gpu-crashed", function() {
		console.log(this.getTitle(),this.getURL(),"gpu-crashed",arguments);
	});

	webview.on("plugin-crashed", function() {
		console.log(this.getTitle(),this.getURL(),"plugin-crashed",arguments);
	});

	webview.on("destroyed", function() {
		console.log(this.getTitle(),this.getURL(),"destroyed",arguments);
	});

	webview.on("media-started-playing", function() {
		console.log(this.getTitle(),this.getURL(),"media-started-playing",arguments);
	});

	webview.on("media-paused", function() {
		console.log(this.getTitle(),this.getURL(),"media-paused",arguments);
	});

	webview.on("did-change-theme-color", function() {
		console.log(this.getTitle(),this.getURL(),"did-change-theme-color",arguments);
	});
}