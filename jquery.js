// JavaScript Document
$(document).ready(function() {
    $("div > ul > li:first-child").addClass("mauNen");
	$("div > div > div:first-child").addClass("mauNen");
	$("div > div > div").not(":first").hide(); //Cho phép hiện thẻ div đầu tiên
	
	$("div > ul > li > a ").click(function(event) {
		
		event.preventDefault();
		
		$(this).parent().siblings().removeClass("mauNen");
		$(this).parent().addClass("mauNen");
		
		var tabId = $(this).attr("href");
		$("div > div > div").removeClass("mauNen").hide();
		$(tabId).addClass("mauNen").show();
	});
});