$(menuHandle);

$(function() {
	$(document.body).on("keydown",function(e) {
		var key = String.fromCharCode(e.keyCode);
		if(e.altKey && key>="1" && key<="9")
		{
			var index = parseInt(key,10)-1;
			$(".menu .menu-item").eq(index).click();
		}
	});
	$(window).on("focus",function(e) {
		var currentWebview = $("webview:visible");
		if(currentWebview.length==1)
		{
			currentWebview.focus();
		}
	})
});


function beforeMenuSelect(elem) {
	$(".menu .menu-item").removeClass('highlight');
	$(elem).addClass('highlight');
}

function afterMenuSelect(elem) {

}

function menuSelect(elem) {
	var $elem = $(elem);
	var meta = $elem.data("meta");
	var callback = meta.callback;
	var subMenus = meta.subMenus;
	var title = meta.name;
	setContent("");
	if (typeof callback == "function") {
		callback();
	}
	if (subMenus && subMenus.length > 0) {
		$(subMenus).each(function(i, v) {
			var name = v.name;
			var callback = v.callback;
			var remark = v.remark;
			var subMenuTitle = v.subMenuTitle;
			if(subMenuTitle)
			{
				$("<div class=subMenuTitle>"+subMenuTitle+"</div>").appendTo('.content-page');
			}
			$("<div class=subMenu></div>")
				.html(name)
				.click(callback)
				.appendTo(".content-page")
				.after("<div class=subMenu-remark>" + remark + "</div>");
		});
	}
}

function menuHandle() {
	$(menus).each(function(i, v) {
		$("<div class=menu-item>" + v.name + "</div>")
			.data("meta", v)
			.click(function() {
				beforeMenuSelect(this);
				menuSelect(this);
				afterMenuSelect(this);
			})
			.appendTo($(".menu"));
	});
	$(".menu .menu-item").click().eq(0).click();
}

function setContent(ctx) {
	$("webview").hide();
	$(".content-page").html(ctx).show();
}
