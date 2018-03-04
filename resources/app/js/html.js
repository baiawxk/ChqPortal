var ng = require('nodegrass');
var cheerio = require('cheerio');
var _ = require('underscore');
var Q = require('Q');

var DEFAULT_WEIGHT = 0.6;
var DEFAULT_CHARSET = "utf-8";

function getURLArticle(opt) {
	var url = opt.url;
	var weight = opt.weight || DEFAULT_WEIGHT;
	var charset = opt.charset || DEFAULT_CHARSET;
	var deferred = Q.defer();
	ng.get(url,function(data,status,headers) {
		if (status==200) {
			try{
		       var articleObj = getHTMLArticle({html:data,weight:weight});
		       deferred.resolve(articleObj);
			}catch(e){
			   deferred.reject(e);
			}
		}
		else{
			deferred.reject(new Error("http status :　" + status));
		}
	},charset);
	return deferred.promise;
}

function getHTMLArticle(opt) {
	var html = opt.html;
	var weight = opt.weight || DEFAULT_WEIGHT;
	html = html.replace(/class *= *"[^"]*"/gi,"");
	html = html.replace(/style *= *"[^"]*"/gi,"");
	html = html.replace(/color *= *"[^"]*"/gi,"");
	var $ = cheerio.load(html);
	var title = $("title").text();
	$("body").find("button,table,script,textarea,form,input,ul").remove();
	$("body").find("div,p,span").each(function() {
		if($(this).html().trim()=="")
		{
			$(this).remove();
		}
	});
	var after = getPayloadOfHTML($('body'),weight);
	return {
		title:title,
		article:after.html()
	}
}
 
function getPayloadOfHTML(old,weight) {
	var oldLength = old.text().trim().length;
	if(oldLength==0)
	{
		throw new Error("cannote get payload html");
	}
	var maxElem = _.max(old.children(),function(v,i,children) {
		var length = children.eq(i).text().trim().length;
		return length;
	});
	var newElem = cheerio(maxElem)
	var newLength = newElem.text().trim().length;
	if(newLength/oldLength<=weight)
		return old;
	else
		return getPayloadOfHTML(newElem,weight);
}

exports.getURLArticle = getURLArticle;
exports.getHTMLArticle = getHTMLArticle;


