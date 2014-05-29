$(".photo").click(function() { 
	console.log("clicked!");
	$(this).find("div").css("visibility","visible");
});