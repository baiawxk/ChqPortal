$(function() {
	$(document.body).on("keydown", function(e) {
		var key = String.fromCharCode(e.keyCode);
		if (e.altKey && (key == "R" || key == "r")) {
			require('electron').ipcRenderer.send('focusRead', $("body").html());
			console.log('already send');
		}
	});
})