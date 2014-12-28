$(document).ready(function(){

	//responsive logo height

		//set initial
		var logoHeight = Math.floor($(window).width()/30);
		$("section#brand .logo").css("top",(logoHeight + "%"));
		//bind to resize event
		$(window).resize(function(){
			logoHeight = Math.floor($(window).width()/30);
			$("section#brand .logo").css("top",(logoHeight + "%"))
		});

});

Pace.on("done", function(){
	$("#loading").addClass("done");
});